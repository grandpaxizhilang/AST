const fs = require("fs");
const parser = require("@babel/parser");
const generator = require("@babel/generator").default
const traverse = require("@babel/traverse").default
const types = require("@babel/types");


let jscode = fs.readFileSync("code.js", {encoding: "utf-8"});
let ast = parser.parse(jscode)


const transform_literal = {
    NumericLiteral({node}){
        if(node.extra && /^0[obx]/i.test(node.extra.raw)){
            node.extra = undefined;
        }
    },
    StringLiteral({node}){
        if(node.extra && /\\[ux]/gi.test(node.extra.raw)){
            node.extra = undefined;
        }
    }
}
traverse(ast,transform_literal);


const constantFold = {
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path){
        if(path.isUnaryExpression({operator:"-"}) || path.isUnaryExpression({operator:"void"})){
            return;
        };
        const {confident,value} = path.evaluate();
        if(!confident || value == 'Infinity'){
            return;
        };
        if(typeof value == 'number' && isNaN(value)){
            return;
        };
        path.replaceWith(types.valueToNode(value));
    },
}
traverse(ast,constantFold);



const keyToLiteral = {
    MemberExpression:{
        exit({node}){
            const prop = node.property;
            if(!node.computed && types.isIdentifier(prop)){
                node.property = types.StringLiteral(prop.name);
                node.computed = true;
            }
        }
    },
    ObjectProperty:{
        exit({node}){
            const key = node.key;
            if(!node.computed && types.isIdentifier(key)){
                node.key = types.StringLiteral(key.name)
            }
        }
    },
}
traverse(ast,keyToLiteral);



function savePropertiesToObject(properties,newMap){
    for(const property of properties){
        if(!property.key){
            break;
        }
        let propKey = property.key.value;
        let propValue = property.value;
        if(types.isLiteral(propValue)){
            newMap.set(propKey,propValue.value);
        }
        else if(types.isFunctionExpression(propValue)){
            let retState = propValue.body.body;
            if(retState.length == 1 && types.isReturnStatement(retState[0])){
                let argument = retState[0].argument;
                if(types.isCallExpression(argument)){
                    newMap.set(propKey,'Call');
                }
                else if(types.isLogicalExpression(argument) || types.isBinaryExpression(argument)){
                    newMap.set(propKey,argument.operator);
                }
            }
        }
        else{
            break;
        }
    }
}


function replaceReferNode(newMap,referencePaths,scope){
    for(const referencePath of referencePaths.reverse()){
        let {node,parent,parentPath} = referencePath;
        let ancestorPath = parentPath.parentPath;
        if(!parentPath.isMemberExpression({object:node})){
            continue;
        }

        let {property} = parent;
        let propKey = property.value;
        let propValue = newMap.get(propKey);

        if(propValue != 0 && !propValue){
            //注意这里替换值为0会出现错误
            continue;
        }

        if(typeof propKey != 'string'){
            parentPath.replaceWith(propValue);
            continue;
        }
        
        if(ancestorPath.isCallExpression({callee:parent})){
            let {arguments} = ancestorPath.node;
            switch(propValue){
                case "Call":
                    ancestorPath.replaceWith(types.CallExpression(arguments[0],arguments.slice(1)));
                    break;
                case "||":
                case "&&":
                    ancestorPath.replaceWith(types.LogicalExpression(propValue,arguments[0],arguments[1]));
                    break;
                default:
                    ancestorPath.replaceWith(types.BinaryExpression(propValue,arguments[0],arguments[1]));
                    break;
            }
        }
        else{
            parentPath.replaceWith(types.valueToNode(propValue));
        }
    }
}


const decodeObject = {
    AssignmentExpression(path){
        let {parentPath,node,scope} = path;
        if(!parentPath.isExpressionStatement()){
            return;
        }

        let {left,operator,right} = node;
        if(!types.isIdentifier(left) || !types.isObjectExpression(right) || operator != '='){
            return;
        }

        let {properties} = right;
        if(properties.length == 0){
            return;
        }

        let name = left.name;
        let binding = scope.getBinding(name);
        if(!binding){
            return;
        }

        let {constant,referencePaths} = binding;
        // if(!constant){
        //     return;
        // }



        let newMap = new Map();
        if(newMap.size != properties.length){
            return;
        }

        try{
            replaceReferNode(newMap,referencePaths,scope);
        }catch(e){
            console.log();
        }
        newMap.clear();
        scope.crawl();
    },
    VariableDeclarator(path){
        let {parentPath,node,scope} = path;
        if(!parentPath.isVariableDeclaration()){
            return;
        }

        let {id,init} = node;
        if(!types.isIdentifier(id) || !types.isObjectExpression(init)){
            return;
        }

        let {properties} = init;
        if(properties.length == 0){
            return;
        }

        let name = id.name;
        let binding = scope.getBinding(name);
        if(!binding){
            return;
        }

        let {constant,referencePaths} = binding;
        // if(!constant){
        //     return;
        // }
        
        let newMap = new Map();
        savePropertiesToObject(properties,newMap);
        // if(newMap.size != properties.length){
        //     return;
        // }
        
        try{
            replaceReferNode(newMap,referencePaths,scope);
        }catch(e){
            console.log();
        }
        newMap.clear();
        scope.crawl()
    },
}
traverse(ast,decodeObject);


const removeDecode = {
    'IfStatement|ConditionalExpression'(path){
        let {test,consequent,alternate} = path.node;
        if(!types.isBooleanLiteral(test)){
            return;
        }
        if(test.value){
            if(types.isBlockStatement(consequent)){
                consequent = consequent.body;
            }
            path.replaceWithMultiple(consequent);
        }
        else{
            if(alternate != null){
                if(types.isBlockStatement(alternate)){
                    alternate = alternate.body;
                }
                path.replaceWithMultiple(alternate);
            }
            else{
                path.remove();
            }
        }
    },
    EmptyStatement(path){
        path.remove();
    },
    VariableDeclarator(path){
        let {parentPath,node,scope} = path;
        if(parentPath.parentPath.isProgram()){
            return;// 全局变量不做处理
        }

        let binding = scope.getBinding(node.id.name);
        if(!binding || binding.referenced){
            return;
        }
        if(binding.constant){
            path.remove();// 没有被引用,也没有被改变
        }
        if(binding.constantViolations.length == 1 && binding.constantViolations[0] == path){
            path.remove();
        }
    }
}
ast = parser.parse(generator(ast).code)
traverse(ast,removeDecode);


//=======================================
function N(){var Mi=["IQenc","EOcAC","4|1|5","XLzWx","rixKm","DjshH","spfBc","vwJJX","bDkJA","Vopbs","const","dNFiz","SVQij","zcNQT","htIyh","split","axJmq","UpQjE","ClSCT","cVRkl","OsSqV","CNQGp","bHaDV","XEDcU","IVqfc","aILYy","tlBJR","(((.+","GQAHg","hUOOV","pPMLt","lTBFg","pQbDH","kqGJW","NVAjg","qTszJ","eRrRT","ucgtv","yitmh","KILRH","Yffkg","hLMdZ","HstIP","retur","FEdlj","pwyCb","MjdhX","nIhSR","1709343iSlOIn","{}.co","PJGOS","gger","fWBFm","bBZEP","eIpgH","jWIoL","ASxki","mXTpa","ructo","sWocm","unwAD","jLBts","aUHuv","BUzty","uojsr","QdcTf","pmfwh","idyOm","CUQqu","YmMre","xjNqy","EwpHi","ion *","trace","XiOwW","lyWMK","djqCF","GKBFB","2|3|1","ObiSt","OBvlp","oHeZZ","|0|4","setIn","3856230kCekgn","gVAFl","count","AcMIu","ZeTsA","proto","KAvbn","dwPii","BMCuT","hGrRF","MNdpQ","qeCbt","hRFaL","oSZJS","LunWV","hLsdc","ing","aLbeV","lICzt","eWdMl","log","AQDvk","gCksO","1766jjPOEh","input","mWroO","GVHgE","ZZxdu","DwjlY","FeLEN","KGVag","daGdb","viPKe","TEnkm","vxEid","dQeUw","RztFs","GHmpT","state","UBnMT","bVenb","JYyeJ","SuzJA","ywzcm","uEBMp","Lhlof","terva","jtdjc","vNanl","jhzUB","MIuKb","BqhvE","MaLwY","KQFxb","bPLVb","lbGCR","696328pvxgXh","bind","NgnvK","czQzj","fQuvp","rn th","oEwOF","zA-Z_","ZCyOn","jDSym","RHlPT","kytmV","PfZWb","qVjlh","eNVUb","8qNCSUs","CZuKn","rCAQX","fIWVC","init","fuGyj","hKJpq","woOzG","oQaow","DWtyg","NQEaK","gQvcq","kxBjn","kHRxT","iOSSr","ZvsYp","ojsWI","bocjD","tdOsG","iSzQU","tsmiZ","wJqwu","ZqlIw","iKHRX","rLJdw","searc","MRpuN","WHFRG","|2|5|","nctio","tion","brKYM","eyiSy","error","funct","usLDK","vgfVH","YtqBC","Vpaeo","LJEcJ","Kbfld","chain","0-9a-","KTjqz","YzZVk","type","AUIiq","PVVmY","fjHDQ","GeTLX","lengt","nhltz","XNSlY","zNnOw","test","\\+\\+ ","OBUiX","LoZOa","GtnBJ","HlmtP","QqhEl","OnROJ","xJhDq","qMINK","GhDBx","mLPNJ","ODQYg","Objec","bAnPH","VDcBZ","USLbm","azkHD","TaRuF","debu","NnKsl","XRJTF"," Worl","apply","cQNaw","MpfYs","mNnBc","504276ycOfGX","PNwYn","edtdi","info","RRmEu","XOcAH","XbOpL","aOLzs","hzhkH","tInwb","uMaFU","n() ","n (fu","ctor(","warn","nCXwY","RSnmr","RKwTj","\\( *\\","zOmoU","Ooeht","ptcFG","JSdWW","OGejv","AYYhc","NtmuN"," (tru","e) {}","Tmxxr","jWuOi","XWKMD","khAeQ","*(?:[","ybCRB","IigLP","KuBKt","gVAzy","actio","|0|3|","OlNcJ","hdoFh","excep","uOgpp","sqUpW","aIJVO","vTlEK","HOReY","JGtus","Hello","zLKen","YKwIi","uIHLZ","aIkPu","LxmPv","a-zA-","rJlkb","1|0|4","__pro","2|0|5","QkLhm","Ntkpa","wsTQo","FOtDw","LeJYq","nstru","lYmAl","KoUHp","QwuQn","xnLGj","cvogh","zIsuq","uBAAO","Nskmt","WYzZw","Jhijq","dOQdW","RfuDK","YzvOq","JdWdX","$]*)","rWXXC","1615327FneUWM","ISKxR","yTgSJ","strin","iThLt","SmNjP","240059fFRJsA","CYklD","ksWKS","5AtsGqy","NFDty","NKZda","VQLFc","ROTzI","YtRFe","is\")(","HkLnr","toStr","YnzuA","bTVER","CFzLa","wSeii","UPAZS","AvjGs","417jTIBVB","QhxdD","FWTPc",")+)+)","wAcOR","KxlQf","PBAkq","LmxFi","\"retu","to__","MBDNU","wbjGm","gmswX","EfNED","nflAc","WfnIX","AmIud","cWKud","vMBDh","sKsJW","cnjzf","HtYsI","Avpuj","gjXrl","kWKqL","agLmW","jejxD","MlIoK","SubTg","OLsOj","WuoWR","JVfmm","GFtpT","while","|1|3|","YgfBN","conso","call","TArEf","rBBNv","aggvr","GiCvU","fDBab","nySoo","ygStO","PfusM","nOfYC","aTieS","table","Z_$][","fMPhQ","lvVYm","CcRGX","KYHIU","BzUem","RdtgO","iXVXB","Jwjuk"];N=function(){return Mi};return N()}function M(k,x){var c=N();return M=function(W,J){W=W-238;var n=c[W];return n},M(k,x)}(function(k,x){function t(k,x,W,J,n){return M(x-498,k)}function y(k,x,W,J,n){return M(k- -272,x)}var W=k();function G(k,x,W,J,n){return M(n- -758,x)}function D(k,x,W,J,n){return M(x- -590,W)}function r(k,x,W,J,n){return M(x- -102,n)}while(true){try{var J=-parseInt(G(-409,-319,-605,-479,-437))/1+ -parseInt(G(-225,-328,-72,-409,-254))/2*(-parseInt(r(306,237,43,82,225))/3)+ -parseInt(G(-170,-38,-378,-145,-221))/4*(parseInt(D(-406,-266,-96,-343,-212))/5)+parseInt(t(1158,1131,1166,1124,1037))/6+parseInt(y(43,7,60,-22,110))/7*(-parseInt(y(280,416,223,81,272))/8)+parseInt(G(-123,-200,-475,-472,-313))/9+parseInt(D(85,-109,-139,74,-97))/10;if(J===x)break;else W['push'](W['shift']())}catch(n){W['push'](W['shift']())}}})(N,137431);

//=======================================

let decodecode = ''
let funs = []
const CollectObFuns = {
    FunctionDeclaration(path){
        let {id,params,body} = path.node;
        if(!types.isBlockStatement(body) || params.length != 5 || !types.isIdentifier(id)){
            return;
        }

        if(body.body.length != 1 || !types.isReturnStatement(body.body[0])){
            return;
        }
        decodecode += path.toString() + '\n';
        funs.push(id.name);
        path.remove();
    },
}
traverse(ast,CollectObFuns);


function isNodeLiteral(node){
    if(Array.isArray(node)){
        return node.every(ele=>isNodeLiteral(ele));
    }

    if(types.isLiteral(node)){
        return true;
    }
    if(types.isUnaryExpression(node,{"operator":"-"}) || types.isUnaryExpression(node,{"operator":"+"})){
        return isNodeLiteral(node.argument);
    }
    if(types.isObjectExpression(node)){
        let {properties} = node;
        if(properties.length == 0){
            return true;
        }
        return properties.every(property=>isNodeLiteral(property));
    }
    if(types.isArrayExpression(node)){
        let {elements} = node;
        if(elements.length == 0){
            return true;
        }
        return elements.every(elements=>isNodeLiteral(elements));
    }
    return false;
}


eval(decodecode);
const CallToString = {
    CallExpression(path){
        let {callee,arguments} = path.node;
        if(!types.isIdentifier(callee) || !funs.includes(callee.name)){
            return;
        }

        if(!isNodeLiteral(arguments)){
            return;
        }

        let value = eval(path.toString());
        // console.log(path.toString(),'-->',value);
        path.replaceWith(types.valueToNode(value));
    },
}
traverse(ast,CallToString);
traverse(ast,constantFold);

ast = parser.parse(generator(ast).code);
traverse(ast,decodeObject);
traverse(ast,constantFold);


const DeclaratorToDeclaration = {
    VariableDeclaration(path){
        let {parentPath,node} = path;
        if(!parentPath.isBlock()){
            return;
        }

        let {declarations,kind} = node;
        if(declarations.length == 1){
            return;
        }

        let newNodes = [];
        for(let varNode of declarations){
            let newDeclarationNode = types.VariableDeclaration(kind,[varNode]);
            newNodes.push(newDeclarationNode);
        }
        path.replaceWithMultiple(newNodes);
    }
}
traverse(ast,DeclaratorToDeclaration);

ast = parser.parse(generator(ast).code)
traverse(ast,removeDecode);


const restoreExpression = {
    // 替换已有的变量定义
    VariableDeclarator(path){
        let{node,scope} = path;
        let {id,init} = node;
        if(!types.isIdentifier(id) || !types.isBooleanLiteral(init)){
            return;
        }

        let binding = scope.getBinding(id.name);
        if(!binding){
            return;
        }
        
        let {constant,referencePaths} = binding;
        // if(!constant){
        //     return;
        // }
        // console.log(path.toString())
        for(let referencePath of referencePaths){
            referencePath.replaceWith(types.valueToNode(init.value));
        }
    },
}
traverse(ast,restoreExpression);



const decodeSwitch = {
    // 处理switch和while控制流
    ForStatement(path){
        let {init,test,update,body} = path.node;
        if(!types.isAssignmentExpression(init) ||!types.isBooleanLiteral(test) || update != null || body.body.length != 2){
            return;
        }

        let [switchNode,breakNode] = body.body;
        if(!types.isSwitchStatement(switchNode) || !types.isBreakStatement(breakNode)){
            return;
        }

        let cases = switchNode.cases;
        let prevSibling = path.getPrevSibling();
        let disPatchArray = prevSibling.node.expression.right.callee.object.value.split('|');
        let retBody = [];
        disPatchArray.forEach(index => {
            let caseBody = cases[index].consequent;
            if(types.isContinueStatement(caseBody[caseBody.length-1])){
                caseBody.pop();
            }
            retBody = retBody.concat(caseBody);
        });
        prevSibling.remove();
        path.replaceWithMultiple(retBody);
    },
    WhileStatement(path){
        let {test,body} = path.node;
        if(!types.isBooleanLiteral(test) || body.body.length != 2){
            return;
        }

        let [switchNode,breakNode] = body.body;
        if(!types.isSwitchStatement(switchNode) || !types.isBreakStatement(breakNode)){
            return;
        }

        let cases = switchNode.cases;
        let prevPath = path.getPrevSibling();
        let prevSibling = prevPath.getPrevSibling();
        let disPatchArray = prevSibling.node.declarations[0].init.callee.object.value.split('|');
        let retBody = [];
        disPatchArray.forEach(index => {
            let caseBody = cases[index].consequent;
            if(types.isContinueStatement(caseBody[caseBody.length-1])){
                caseBody.pop();
            }
            retBody = retBody.concat(caseBody);
        });
        // prevSibling.remove();
        path.replaceWithMultiple(retBody);
    },
}
traverse(ast,decodeSwitch);




ast = parser.parse(generator(ast).code)
traverse(ast,removeDecode);



let {code} = generator(ast)
fs.writeFile('decode.js',code,(err)=>{})