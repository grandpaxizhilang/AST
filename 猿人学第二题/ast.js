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


//===================================
var $dbsm_0x5c97=["dW7CrQ==","BsK0Jg==","TsOAwpc=","ei19","wotLdA==","w6ZCwrQ=","F3sH","woHCtH8=","wrnCkMK2","w6PCn3c=","w6XCsnI=","w6XDjH4=","MMK9w70=","VywX","asKiw7M=","w5rClkA=","wrHDqmc=","YUXClA==","w4TDsjM=","w6DDrTo=","fwdR","JcO8w74=","woBwUg==","w5HCkWM=","wqonQA==","chMU","w5vDt8O1","556W776F5L+B","OcOBwrI=","wqXCuVo=","J8K6w7U=","w7Uxwog=","d0zCuA==","wphXdw==","cgZc","w7Rawq8=","LcKuw74=","wobCo3g=","w7/CixM=","DMKDw6I=","L8KWw4U=","wo7Cj3U=","ZsKOw6M=","w4rCmVg=","TTxB","DB3Cgg==","LMKNYA==","w4bDhn8=","wohHwrg=","bcOnwpE=","wpkRXQ==","aitM","w7XDlBI=","EcKkFw==","LsOuwrA=","AsOqwog=","FcO4wrw=","DMKBw5k=","w4ZUKg==","w4A7wq8=","w7olwpU=","dzAG","wptswpI=","MsO4wqA=","GsKGw5U=","VMKOw7o=","SBpe","MmrCvg==","WzMP","55+d772I5L6+","wrhJwp0=","wq5Two8=","w5TCqcKe","VHLCtg==","w50qwoo=","w5LDshM=","w45/dg==","JUAr","XU7Crg==","w4QIwos=","d1nDjQ==","CljCkQ==","wohBwps=","w5LCvns=","WcKKw7Y=","PcOIwok=","w6RZPQ==","ZMK3w5E=","TFPCmw==","wpfDpG0=","McKmCg==","w5DDisO0","KMKlCg==","w54jwqM=","A8Olw4I=","w5sKXQ==","asOkwog=","woIrNA==","wpHCssKs","ccKRw5E=","GMO4w78=","w6zCpBY=","wqthwo0=","E8O1wpM=","F8KwQQ==","PG3CjA==","w4HDiMOf","DMKQw4c=","w7/DhsK7","w5fDq1c=","BMKpPQ==","A2B2","IVpC","w5RQwpo=","w6rCsjI=","wrHChWM=","w4jDnAQ=","B39v","D8KMXw==","FsKKw6U=","w4/Ct8Kl","bjB4","w43CnGg=","wqZGRg==","ZVjDvA==","ei/CpA==","w4R2Gg==","w7jChTw=","w57CsFk=","wqLCiUg=","bDlj","cTFw","LGdP","wo3Cj3U=","BcKHw7w=","wqNncg==","JV9V","w5vDk1A=","KcK9w74=","wofCscK1","w67Ck8Kz","wrRwwrs=","w6NqGw==","wp7Cn8Kq","wqE9KQ==","wp7CtsKR","w6jCi8KX","cGrDhg==","worDmy8=","YGvDtg==","w67CrXI=","w5IxSg==","MVEO","wonCn8Ks","w5vDl2U=","MsOZw7U=","DcKbYQ==","w6HCphw=","MMK/fw==","woksKQ==","w6PCmXk=","U8OIwpI=","w7nCllw=","BG3CuA==","BsKFw5o=","w5gbwog=","woHCgMKB","FsO+w6I=","w7HCgF8=","J8KUw5Y=","McOiw5s=","HMO9w7w=","w6DDksO4","w6bDhsO8","N8O5w7k=","w5nCpMOZ","wqV0woo=","G3gn","d8OLwq0=","wpPCmMKA","wovCgVA=","w5bDkhE=","w4BGFQ==","w47CksOP","WGnCtA==","aw9B","w4pqOg==","w5PChcO7","wrbCiUk=","w41yMg==","w7DDuAU=","KMOFwoQ=","Gn1o","XDk8","c8Owwpw=","worCn24=","w5MhSg==","eA/CqQ==","GWzCiA==","Zg5L","N8KGw5s=","HcOUwo0=","a2vDkA==","BmUu","w73DuHg=","MsKcw7U=","B8KMJQ==","wrXCv8Ku","RcKdw5M=","GEE0","L8Ktw4A=","I8KrBw==","YTgj","dW/CpQ==","dSzCig==","wqlMwqY=","dcKCw78=","w7/DocO1","DcKUw4Q=","eMK9w50=","wp/CuMKJ","wqzCq3U=","w6jDq8Ow","I0BF","KHxJ","GcOhwp0=","a8Khw48=","BcKTw7A=","w6HCgyQ=","w7AKwpk=","IcOkw7o=","wrZxcg==","w5jCkVg=","I1E4","w6lIKg==","F8Oow7M=","wrnCsFg=","wprCoMKj","wpLCk8KV","w7jDpSY=","CMKyw5M=","I2Qg","XMKEw7o=","w5PDnjA=","cSN0","b3DCrw==","w7QNew==","ejl+","w6TCg3w=","w43DuUc=","LmlL","wqoJfg==","Qx3Chw==","YCYH","w4zCsSU=","UsKZw48=","MMKzew==","w4jCgns=","w6nCo8OS","w7MQXQ==","w713PA==","VDJ+","fsK9w50=","YTfChA==","wqtufw==","GcKkQw==","w5piwoE=","w6TDusO/","E8KBw4o=","fx8D","f8O1wow=","DFTCvg==","I8Kgew==","NsKLw5s=","ZVbCig==","w4EhwrA=","w5cqwq4=","EMKzIQ==","IcKrNQ==","GnU7","wogREQ==","w4zCu2o=","D8KzOQ==","ecOxwpQ=","w6tbCQ==","exVV","NsKiVA==","B1lk","B8OnwoI=","w640YA==","C8O4woI=","CMKycA==","w59IMA==","SBMw","FsOPw5k=","F8Osw7o=","LlV/","w6cjwo0=","w5nCt0k=","wrvCn34=","E8KnNQ==","VwrCmg==","wrvCpmc=","w4lWAQ==","w6zCimQ=","wok4Hg==","w5FDwrc=","wrPCmMKr","wpbCgcKs","HcKEBQ==","wrPCjsK4","E8Kjw4A=","w5jCjHw=","JMKEHQ==","w5zCqAQ=","HMOdw5Y=","wrEAdA==","OcKgw5s=","Y8Kjwpc=","w7/DicOb","QBE9","bcKLw5Q=","w7QIwqA=","ZVXDlA==","QxBe","w7VmwqM=","wq/Cgnw=","NgfCoQ==","OF8K","EMKFMA==","w7LCrsK6","E8Ohwro=","PsOywqE=","w7nCoWU=","LsKaMA==","KcKWw5c=","ZsKHw4c=","O8OFw7I=","O8KCbg==","wpdYSw==","JizCrg==","cmXCkQ==","wqXCnsKL","esKSw4w=","w4rCs8Kb","McKMbg==","w5c7wpk=","MMKbHw==","w5/DuHg=","w4bDuE8=","w4bClGo=","eCMZ","USzChg==","PXfCiA==","wroXw7o=","AcOXw6c=","M8Kvw7g=","DMKBcg==","cDR6","PcOQw74=","woM0Hg==","DMKDfg==","woQpJQ==","w5HCusKs","w4HCsXM=","w5Umwrc=","LMKiWA==","DkAH","IXJ+","SB8T","w4tPwqk=","wrnDiU0=","JMKVw4Y=","w6gTwpc=","KiTCoA==","clbCtw==","P3Qa","w73DlTY=","w7hQwoE=","RRpA","GcKzIQ==","U3PCkA==","w6zDs0Q=","w6PDolw=","dQh4","woJqcA==","w5nDpFw=","w4fDpmM=","LnDCmA==","w4XDqkE=","wr/Cnk8=","worCpMKg","csKZw7w=","NMKRw40=","MWYE","OWvCsA==","wrJ9wqA=","fQo6","cWrCiw==","woLChMKQ","woAIHg==","wpMIBg==","w7XDukU=","w7DDjgM=","SsKiw4Y=","CRDCqg==","w7rDh1E=","w6R9wpU=","woojfA==","wqjDvsKi","w6zDs8OV","XAEn","QXTCuA==","RBJx","wpbCvUU=","wqMUBA==","T3/Chg==","K8KXbQ==","w4PChcKA","ShZi","J27CjA==","KHJL","w6kdWA==","woPCtcKN","V8K+w58=","w53CjcKn","w47CgUg=","E10E","w5fCjcOY","UMOzwqI=","w7DChRE=","SDF5","w63CtTY=","dMK6w4w=","MVrCsA==","wqXCg2A=","M8KMDQ==","wq0SXQ==","wpDCmcKn","wr4SXg==","w5/DosOh","EcKePA==","d0zCgA==","wqrCgcK9","w4pfAA==","aCHCqQ==","IHhk","w6wgYg==","wqnDunM=","w4bDlmM=","wqZLwro=","w5zCrsOE","PMOnw5s=","CMKLaw==","J8KtPg==","A8O3w7M=","w7F9NA==","w47Dkwc=","DcKdQw==","wqogaA==","C2nCjA==","wprChUo=","w6LDgGY=","w5HCgQM=","SwgU","wqsXOQ==","EsKRGw==","CMKqw7g=","woTCl8Ke","w4jCgMK3","BsOrwqY=","L8Kecw==","wo4MSw==","NXok","M8KHJg==","XCHChQ==","NsKsIw==","w4vDvF4=","woxLXw==","ZMKmw70=","KTrCvQ==","w6bCp0Y=","akPDkA==","CsKCew==","EMKGDA==","w43Cg1c=","SCjCgQ==","YsK3w58=","LMKzGA==","ZWzCoQ==","FsKXw70=","w4Uwwos=","w7dtwqQ=","wqshUg==","w4XCikQ=","OX5t","WQ3Cpg==","w6Qiwog=","DcKaVw==","RcKVw4Q=","IMKtJw==","w5Fvwqg=","fEnClw==","w4PDlFw=","w5XCqcOw","w6DDrho=","w50zVg==","DjzCmA==","GMKQHQ==","YU3Cjw==","wrjDp28=","cjtf","wqJOaA==","MsKtOw==","w6zDqAE=","BMKKw6E=","BsODw5c=","B8O5wok=","FXLCsA==","RMKyw5Q=","w43CuHU=","BsKmVA==","w5vCssKm","WBLCpg==","DsKyIQ==","wqYSRA==","wrXChEo=","YMO1wrY=","KMKdw7w=","wr3CnWA=","woMMZQ==","EkY6","w4QpRQ==","wrXCo8K/","T8Orwqs=","T8OXwos=","Ml1V","w5XCicOM","dsKnw5w=","AMKPw5w=","DMKQw5Q=","MsKgLQ==","NTPCog==","UXPCpQ==","w7hhwqU=","w5fCiQk=","wpvCn8KU","IRfCmA==","w5Itwpk=","VDtG","wpdudg==","w7fCrcKQ","w61uIQ==","w4hLCA==","C8Kpw5A=","asK0w4w=","C8OBwp8=","McOZw7I=","ZwHCjg==","MhzChg==","KcK2SQ==","w7bCqMKR","w481Qw==","w5zDmUw=","w5RjGQ==","w43Co8O6","KF12","BcKGNQ==","w5gOwpU=","wrPCgMKb","w6MIwqk=","cQli","bxhA","KmNX","w7nDssOh","w7ouwqs=","w6vCn2E=","w7LCkj8=","WCzCsw==","wq7Ckks=","JMO9wqM=","VMKefw==","w5HCk0U=","w4/Co8OZ","wprCn8O9","ZsKjw74=","CFnCuQ==","w4LDqiI=","w4bDpXc=","O3cz","ei8g","w4XDgWw=","IsKFAg==","wrpowrE=","w57ChsKy","FcKrMg==","w5fDjC0=","EsK0w4w=","w6xmDw==","PUl9","wpVVwpw=","wrEpcA==","wrTCs8Ka","wpzCv2o=","w7nCm10=","NcOmw6Q=","esO7woE=","S3DCjQ==","wrBDwpk=","w4rCtlU=","wpluVw==","cyvCng==","wp8aLg==","HHZf","U8KHw6I=","w5lCwrE=","wp8xQw==","w5M4wro=","UcOHwpY=","FcKrHw==","LsKCBw==","A31T","QT1w","wpvDo3w=","w5fDtAk=","aCMB","w7LChF0=","CcOKw7s=","Q27Dmw==","wo7CqHA=","w4DDlyg=","w6DDq8OG","ZRpR","w6jCjMK5","Jl/Csw==","5Lio55aR6IuL","ecOWwq0=","P8KCYA==","AcKnKg==","wrB1wqI=","w6TCpX4=","w6Bucw==","KVnChg==","w503bA==","w7Zewrg=","KsK1Rw==","w5TCicOw","dyJq","BETCvg==","QmHDvA==","wqPDiHA=","PcKceA==","aWjDgg==","wqU2ew==","w63Cgxo=","Z8KHw5Q=","asKSw5U=","LcKKJQ==","TcK6w4E=","w5xzOQ==","w63Ch8KA","w5PCgMKk","HMONw54=","KcKHMg==","IsKQw5s=","N8OHw6w=","EMKbPQ==","w7LDlhM=","QR9+","VzJg","UCJ/","w5EiWA==","w7Qnwog=","w4JvGA==","OcKEbg==","wqzCh8Kh","w5LCo8Ke","NVLCvA==","w5HChUY=","w6rCi8Om","V1vDpw==","GHcg","PhTCpA==","woPDgVQ=","w6HDn3w=","wrJ8wro=","wrgcZw==","FMOiwoE=","w7jCpWk=","HsKkGQ==","w4TDo2M=","w7/CssKl","DcKsdQ==","w7bCsMKc","U2PCpA==","w5nCiMO0","P8Olw6Q=","w7HCkGI=","X8KFw4U=","MX1J","ED/Clg==","w4ZGJQ==","w6M+wpU=","w77Cr8Kj","wo3CoEs=","wrvCgF0=","w57Cr8Kl","w6U8dg==","fmzCoQ==","w6Mnwok=","W1PCkg==","GMKwOA==","wrVMfw==","EcO0wog=","LsKdw7g=","wrhGwp0=","MWZl","HXgQ","w4dpwrM=","w4vCrMKW","dF7Cog==","Tjth","wqINRw==","bjkl","wpwUfw==","wpRhZQ==","c3PCmg==","F1EV","w57Dl8OD","eyE6","w5jCsRo=","OMKzPg==","w4bCgsO+","w5tINw==","I8KQw78=","F8OswrQ=","dhR8","Yh1l","w4zCjMK5","w6PDplw=","ahVd","cSFx","w4zCrMKZ","w7wkwpQ=","dkfDtA==","w5TCm00=","EsKGw6A=","w47DrcO0","eDh/","woRqRw==","HcONw5g=","w4DCp00=","RyzCgg==","wrDCskQ=","asKQw6Y=","MS7Cuw==","bknCnw==","e8K1w7o=","dxkv","5b6nwrg9","AV4y","w4bCpMOl","w6hiPQ==","w5NlAQ==","AklN","c8Kmw5I=","OsKLMw==","wozCosK2","wpJ8WQ==","w4TCtkQ=","wpNAwo0=","w74wwoI=","RUzCrA==","wrvCt8K1","w67DkAg=","w73CrFg=","MHcw","DsKtKg==","XlzCmw==","cHLCrw==","ayw3","w7zCszI=","ccKyw50=","woIHGg==","UsKKw7E=","wqjCkMKR","aGTCqQ==","BsKOMw==","EnPCmA==","IMKRJw==","wqwbBA==","L8Onwow=","Z8KFw7g=","bcKvw7c=","w7sEwrk=","SQPCvQ==","wprCqMKu","C8Ocw7g=","wpbCl04=","wq0pPg==","wrAeLw==","w4vCiMKp","w4vDjMOd","w7fDqHg=","w7tjwqU=","PsOowpM=","CcOwwo0=","wplrwo4=","w4fCsmg=","GEtL","FcKfw7E=","d8KUw58=","RBpd","w4nCj8Ka","LcOqw40=","I8KoHQ==","w7nDhVQ=","wqfDmlU=","OcOmw5o=","b8Kgw5k=","wpTCnsKb","SsKYw4Y=","RG7Ctg==","w43Dp1k=","wo1vYA==","XsObwrM=","fiM/","w4TCiCE=","AcKTTA==","wq8PaQ==","w5wbwqE=","wqoYGw==","woHCg8KQ","worChF8=","dWjDsQ==","woDCjMKj","w5LCtVs=","dnHCsA==","AcKoeQ==","w5rDsnI=","ZWPCtA==","w7ZNwoE=","wq7Cu8K4","w5HCkcKv","DMKGw40=","P8Orw6E=","FcKzw5U=","wpvClcKR","NsOLw4I=","Tm3Dgw==","Zxp8","C8K3JA==","wpEUSw==","PsOfw7E=","G8K4Ow==","w5sHwpc=","w4ogWQ==","MMKyGA==","d8OfMA==","w7Q9wpw=","C8KAwrQ=","dWDDhA==","TsKnw7o=","w7rDkMOl","S8Kaw6A=","w4rDo2w=","N3bCvg==","MsKQw70=","NMO9wq0=","McKOMg==","w4fCrwY=","MMOHwpE=","w6ZQNw==","w4AxwpQ=","w6DCrGM=","w7/DoWc=","TlzCow==","wo7CksK6","ckfCtg==","wrErDQ==","SSIs","ZXnDjA==","wr/DumY=","Jlwl","IcKLDg==","IcKpDA==","wpZtwo0=","wq3CrXI=","w5XCkcKw","NyNb","wqPDknQ=","DcKWw6E=","T8KVw70=","w7DCuFo=","Xl/CrQ==","C8OAwoM=","w7LDgFU=","w4fDulE=","wpgBWw==","BMKFPg==","wr3Ch8KU","w4hYNg==","wqEOcA==","VzDCgw==","McKtw5s=","EMKnw4Q=","wrnCgcKT","RmHDpw==","WsO1wqI=","KMKRdw==","w5vDo0U=","w5PDt8Ob","w6bDpSw=","w5FQwrI=","w4LCl2o=","XyDCjg==","aB0S","w5EPfQ==","EcKVcw==","c8KMw7w=","w6hgwrk=","w7x6wpI=","fsKvw6U=","wo8WOQ==","wok6Mg==","XGnCsA==","BnMO","SgzCkg==","wpBwSw==","wqDCpcKv","worChAE=","wrrCpGM=","LsKvNQ==","wpnCssKc","w7gEbg==","JMOAw4I=","OGkK","w6LDp0E=","TAMz","wrfDtVA=","wrrDvGs=","w4jCqsKh","TCIi","W8KFw5s=","Z8Kuw5A=","FsKPw74=","LsKjw6Y=","IxnCvQ==","w5sxRw==","HVPCrA==","w4vDvyg=","wqHCrG0=","wp8vLw==","woowDg==","FiTCqA==","P8KhEg==","w5zDi8Ob","w53Crxo=","wpzCmMKj","w5nCpyE=","w7nCjxQ=","w6pAOg==","w5HCs8Ku","wrjCh2I=","woPCo8KK","ZRZA","LcKAaw==","w6rCgcOv","w4BKDg==","w7vCpjs=","LHXCjQ==","AcOIwrE=","CMOYw6c=","woxBRA==","w7jCg14=","fsOgwrM=","wqZ2wqA=","w4XCi8K2","eiXCrQ==","w6LCscKc","w4glHQ==","SsOqwrY=","w5tFHw==","UMOAwpI=","wqbCvFc=","IcOzwq4=","w6YsSQ==","wpE6Ew==","wq1wWw==","w5kzWA==","UAdl","ZjBh","LXhl","w5PCkcKF","w4BGPQ==","DEMv","wpfCiUE=","UEPCpA==","wq16VA==","L8Opwqk=","IMOmwqU=","C8Kgew==","asKyw5s=","w6HCr2Q=","wqrCmcKU","FyHCgQ==","wo9Qwpo=","wpHCvMKt","FsKPBw==","w4fDn14=","wpXCucKX","w5cdwoA=","UcOrwqU=","w6bDisOG","N8ORwpE=","w6fDjEo=","McOIwrs=","ZBVX","w5bCpXc=","w5oCwqA=","EsKJLQ==","ccKuw6E=","w5ANwpY=","wpJKUA==","dzJq","w5jClhE=","H8KzIQ==","Xh5F","TxN2","w5bDv0E=","wp4FUA==","wrrCqmQ=","A8K/w4M=","wrRdwrA=","TsKxw7Q=","BsKVw6Q=","Vl7ClQ==","SC5p","w57CksOW","wrZIwoY=","PHso","asOAwrU=","wqpXwr4=","czVi","MMKmSw==","wr3Cg8KY","Vxxy","w6/DtMOQ","b8OLwok=","G8KSBg==","C1fCrg==","E8KvCA==","w78GZQ==","w4AewpA=","dMO1wrI=","PGpm","LT/Cqg==","w6TDq1s=","AFgx","McKZLA==","wrNzXg==","w77DgVQ=","w6dZHQ==","w5hIHA==","d2DCkw==","w57DqVw=","wrzCr30=","w6/DkX4=","w6fCmQE=","wqvCqMKF","VcORwoM=","w63DlnU=","AsKCBA==","cD5c","w47CpMOC","wrDCgMKs","w5w/wrw=","w4bCkR8=","LsOMwoE=","B8KsYQ==","JMOGwrk=","wrt+wp4=","S8K/w5c=","XxPCrA==","wq4WKg==","w7rChwQ=","w7nCl1I=","DsKIZQ==","w4zCuV0=","wovCqcKP","wptQwoA=","wq7CqcKX","EsKGUw==","FSfCpw==","w5JkQQ==","w6bChmY=","w67Cq8KM","EsO3wr0=","w6A1wpY=","w7jCk3s=","w70Xwqo=","wpNBfg==","N8K9w4c=","V0XCmw==","woDCgcKj","dMOcw5g=","KMOLw6U=","cF7Cvg==","CBzCrA==","Algt","w67Ckz0=","w4vCh0o=","w5TCjnw=","wpVLwoY=","w55Ewog=","fUHDhw==","w4rCg8Oh","GcO8wpg=","L8O6wr4=","w6bDs1Q=","w6jDu28=","FMOswrM=","F8OYw4A=","bFzDlw==","BsKAFQ==","E8KSHg==","wqbCsFE=","w79DJw==","w5ojwr0=","wqPCvsK3","w7IAwr4=","HFZe","wrTCgkI=","BsOnw5s=","wp3CvcK6","BMOTwr0=","E8K9w44=","ThN6","bjBA","wprCrMK7","w7HClcOH","wozClMKw","d8ObwpY=","TD4z","wphAwqs=","w7lUMg==","w7EfRQ==","FsKjHw==","w7/CkyA=","UcObwo4=","w5bCssKO","BMKOw4c=","ZGnCog==","Q11p","wo/CtMKG","w5DClEM=","AXJh","KcOjwoI=","H8KOew==","YgnCrQ==","bm7DrA==","wq8HBg==","w4HCi8K3","w5DCicKc","bcKIw5I=","w6Eowr0=","wqzCocKb","OsKtBg==","JnnCrA==","w5w1wrU=","GcKaWA==","ZC0Y","wq7Cq2g=","J8OPw7g=","w6fDrXM=","H8KIAA==","wpFtwoU=","DcKJLA==","cMKmw6c=","w4bDvwU=","BsKxw44=","LMOGw5U=","w7jCjSE=","Vxgg","wrTCnsKE","w5HDvn8=","woTDlGs=","Xhsa","GsOww7E=","AS/Cvw==","w67Ct8Kb","EMKUw4o=","Z1bCkQ==","w7HDoUM=","w4rDrSk=","w7cMWQ==","QcOrwoM=","w6vClsKc","PcKuwog=","ZsKQw5c="];(function(_0x37bb43,_0x5c9730){var _0x476994=function(_0x14728e){while(--_0x14728e){_0x37bb43['push'](_0x37bb43['shift']())}};var _0x3563a0=function(){var _0x1cdd1b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2bf3da,_0x4d45ca,_0x1cc425,_0x41eb56){_0x41eb56=_0x41eb56||{};var _0x3e7152=_0x4d45ca+'='+_0x1cc425;var _0x597db8=0;for(var _0xd54d1b=0,_0x290faa=_0x2bf3da['length'];_0xd54d1b<_0x290faa;_0xd54d1b++){var _0x376655=_0x2bf3da[_0xd54d1b];_0x3e7152+="; "+_0x376655;var _0x2d838a=_0x2bf3da[_0x376655];_0x2bf3da['push'](_0x2d838a);_0x290faa=_0x2bf3da['length'];if(_0x2d838a!==!![]){_0x3e7152+='='+_0x2d838a}}_0x41eb56['cookie']=_0x3e7152},'removeCookie':function(){return'dev'},'getCookie':function(_0x20d75c,_0x38dc58){_0x20d75c=_0x20d75c||function(_0x5b13f8){return _0x5b13f8};var _0x46092a=_0x20d75c(new RegExp("(?:^|; )"+_0x38dc58['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x305756=function(_0x4c326d,_0x3ddf43){_0x4c326d(++_0x3ddf43)};_0x305756(_0x476994,_0x5c9730);return _0x46092a?decodeURIComponent(_0x46092a[1]):undefined}};var _0x46744a=function(){var _0x3711d7=new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");return _0x3711d7['test'](_0x1cdd1b['removeCookie']['toString']())};_0x1cdd1b['updateCookie']=_0x46744a;var _0x57f115='';var _0x18bf0a=_0x1cdd1b['updateCookie']();if(!_0x18bf0a){_0x1cdd1b['setCookie'](['*'],'counter',1)}else if(_0x18bf0a){_0x57f115=_0x1cdd1b['getCookie'](null,'counter')}else{_0x1cdd1b['removeCookie']()}};_0x3563a0()})($dbsm_0x5c97,334);var $dbsm_0x4769=function(_0x37bb43,_0x5c9730){_0x37bb43=_0x37bb43-0;var _0x476994=$dbsm_0x5c97[_0x37bb43];if($dbsm_0x4769['jxRXnn']===undefined){(function(){var _0x1cdd1b;try{var _0x57f115=Function("return (function() {}.constructor(\"return this\")( )"+');');_0x1cdd1b=_0x57f115()}catch(_0x18bf0a){_0x1cdd1b=window}var _0x46744a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1cdd1b['atob']||(_0x1cdd1b['atob']=function(_0x2bf3da){var _0x4d45ca=String(_0x2bf3da)['replace'](/=+$/,'');var _0x1cc425='';for(var _0x41eb56=0,_0x3e7152,_0x597db8,_0xd54d1b=0;_0x597db8=_0x4d45ca['charAt'](_0xd54d1b++);~_0x597db8&&(_0x3e7152=_0x41eb56%4?_0x3e7152*64+_0x597db8:_0x597db8,_0x41eb56++%4)?_0x1cc425+=String['fromCharCode'](255&_0x3e7152>>(-2*_0x41eb56&6)):0){_0x597db8=_0x46744a['indexOf'](_0x597db8)}return _0x1cc425})})();var _0x14728e=function(_0x290faa,_0x376655){var _0x2d838a=[],_0x20d75c=0,_0x38dc58,_0x46092a='',_0x305756='';_0x290faa=atob(_0x290faa);for(var _0x4c326d=0,_0x3ddf43=_0x290faa['length'];_0x4c326d<_0x3ddf43;_0x4c326d++){_0x305756+='%'+('00'+_0x290faa['charCodeAt'](_0x4c326d)['toString'](16))['slice'](-2)}_0x290faa=decodeURIComponent(_0x305756);var _0x5b13f8;for(_0x5b13f8=0;_0x5b13f8<256;_0x5b13f8++){_0x2d838a[_0x5b13f8]=_0x5b13f8}for(_0x5b13f8=0;_0x5b13f8<256;_0x5b13f8++){_0x20d75c=(_0x20d75c+_0x2d838a[_0x5b13f8]+_0x376655['charCodeAt'](_0x5b13f8%_0x376655['length']))%256;_0x38dc58=_0x2d838a[_0x5b13f8];_0x2d838a[_0x5b13f8]=_0x2d838a[_0x20d75c];_0x2d838a[_0x20d75c]=_0x38dc58}_0x5b13f8=0;_0x20d75c=0;for(var _0x3711d7=0;_0x3711d7<_0x290faa['length'];_0x3711d7++){_0x5b13f8=(_0x5b13f8+1)%256;_0x20d75c=(_0x20d75c+_0x2d838a[_0x5b13f8])%256;_0x38dc58=_0x2d838a[_0x5b13f8];_0x2d838a[_0x5b13f8]=_0x2d838a[_0x20d75c];_0x2d838a[_0x20d75c]=_0x38dc58;_0x46092a+=String['fromCharCode'](_0x290faa['charCodeAt'](_0x3711d7)^_0x2d838a[(_0x2d838a[_0x5b13f8]+_0x2d838a[_0x20d75c])%256])}return _0x46092a};$dbsm_0x4769['BVqwWm']=_0x14728e;$dbsm_0x4769['nEmeup']={};$dbsm_0x4769['jxRXnn']=!![]}var _0x3563a0=$dbsm_0x4769['nEmeup'][_0x37bb43];if(_0x3563a0===undefined){if($dbsm_0x4769['iksELd']===undefined){var _0x4dd9af=function(_0x4bba7a){this['jQydcl']=_0x4bba7a;this['eSfauz']=[1,0,0];this['euXUGA']=function(){return'newState'};this['ARXZKn']="\\w+ *\\(\\) *{\\w+ *";this['tYFkBk']="['|\"].+['|\"];? *}"};_0x4dd9af['prototype']['TxRJqo']=function(){var _0x5a74b0=new RegExp(this['ARXZKn']+this['tYFkBk']);var _0x3b40f1=_0x5a74b0['test'](this['euXUGA']['toString']())?--this['eSfauz'][1]:--this['eSfauz'][0];return this['aItCLE'](_0x3b40f1)};_0x4dd9af['prototype']['aItCLE']=function(_0x7f2e74){if(!Boolean(~_0x7f2e74)){return _0x7f2e74}return this['lFMuxr'](this['jQydcl'])};_0x4dd9af['prototype']['lFMuxr']=function(_0x56c595){for(var _0x582c5b=0,_0x1d4751=this['eSfauz']['length'];_0x582c5b<_0x1d4751;_0x582c5b++){this['eSfauz']['push'](Math['round'](Math['random']()));_0x1d4751=this['eSfauz']['length']}return _0x56c595(this['eSfauz'][0])};new _0x4dd9af($dbsm_0x4769)['TxRJqo']();$dbsm_0x4769['iksELd']=!![]}_0x476994=$dbsm_0x4769['BVqwWm'](_0x476994,_0x5c9730);$dbsm_0x4769['nEmeup'][_0x37bb43]=_0x476994}else{_0x476994=_0x3563a0}return _0x476994};

//===================================
const CallToString = {
    CallExpression(path){
        let {callee,arguments} = path.node;
        if(!types.isIdentifier(callee,{'name':'$dbsm_0x4769'}) || arguments.length != 2){
            return;
        }

        let value = eval(path.toString());
        // console.log(path.toString(),'-->',value);
        path.replaceWith(types.valueToNode(value));
    },
}
traverse(ast,CallToString);


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


const combin = {
    // 合并a = {} 
    AssignmentExpression(path){
        let {parentPath,node,scope} = path;
        if(!parentPath.isExpressionStatement()){
            return;
        }

        let {left,operator,right} = node;
        if(!types.isIdentifier(left) || !types.isObjectExpression(right) || right.properties.length != 0 || operator != '='){
            return;
        }

        let {properties} = right
        // console.log(path.toString());
        let AllNextSiblings = parentPath.getAllNextSiblings();
        for(let nextSibling of AllNextSiblings){
            if(!nextSibling.isExpressionStatement()){
                break;
            }

            let {expression} = nextSibling.node;
            if(!types.isAssignmentExpression(expression)){
                break;
            }

            let leftNode = expression.left;
            let operator = expression.operator;
            let rightNode = expression.right;
            if(!types.isMemberExpression(leftNode) || !types.isIdentifier(leftNode.object,{"name":left.name}) || !types.isStringLiteral(leftNode.property) || operator != '='){
                break;
            }

            let objectNode = types.ObjectProperty(leftNode.property,rightNode);
            properties.push(objectNode)
            nextSibling.remove()
        }
    },
    VariableDeclarator(path){
        let {parentPath,node,scope} = path;
        if(!parentPath.isVariableDeclaration()){
            return;
        }

        let {id,init} = node;
        if(!types.isIdentifier(id) || !types.isObjectExpression(init) || init.properties.length != 0){
            return;
        }

        let {properties} = init
        // console.log(path.toString());
        let AllNextSiblings = parentPath.getAllNextSiblings();
        for(let nextSibling of AllNextSiblings){
            if(!nextSibling.isExpressionStatement()){
                break;
            }

            let {expression} = nextSibling.node;
            if(!types.isAssignmentExpression(expression)){
                break;
            }

            let leftNode = expression.left;
            let operator = expression.operator;
            let rightNode = expression.right;
            if(!types.isMemberExpression(leftNode) || !types.isIdentifier(leftNode.object,{"name":id.name}) || !types.isStringLiteral(leftNode.property) || operator != '='){
                break;
            }

            let objectNode = types.ObjectProperty(leftNode.property,rightNode);
            properties.push(objectNode)
            nextSibling.remove()
        }
    },
}
traverse(ast,combin);


const replace_var = {
    //同时赋值a = {}; b = a ===> a={};b ={};
    AssignmentExpression(path){
        let {parentPath,node,scope} = path;
        if(!parentPath.isExpressionStatement()){
            return;
        }

        let {left,operator,right} = node;
        if(!types.isIdentifier(left) || !types.isObjectExpression(right) || operator != '='){
            return;
        }

        let nextSibling = parentPath.getNextSibling()
        if(!nextSibling.isExpressionStatement()){
            return;
        }

        let {expression} = nextSibling.node;
        if(!types.isAssignmentExpression(expression) || !types.isIdentifier(expression.right,{"name":left.name}) || !types.isIdentifier(expression.left) || expression.operator != '='){
            return;
        }
        // console.log(nextSibling.toString())

        expression.right = right;
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

        let nextSibling = parentPath.getNextSibling()
        if(!nextSibling.isVariableDeclaration()){
            return;
        }

        let {declarations} = nextSibling.node;
        if(declarations.length != 1 || !types.isVariableDeclarator(declarations[0])){
            return;
        }

        let idNode = declarations[0].id;
        let initNode = declarations[0].init;
        if(!types.isIdentifier(idNode) || !types.isIdentifier(initNode,{'name':id.name})){
            return;
        }

        // console.log(nextSibling.toString())

        nextSibling.node.declarations[0].init = init;
        scope.crawl();
    },
}
traverse(ast,replace_var);


function savePropertiesToObject(properties,newMap){
    for(const property of properties){
        if(!property.key){
            break;
        }
        let propKey = property.key.value;
        let propValue = property.value;
        if(types.isStringLiteral(propValue)){
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

        let propValue = newMap.get(parent.property.value);
        if(!propValue){
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

        let {constantViolations,referencePaths} = binding;
        // if(constantViolations.length != 1){
        //     return;
        // }
        // console.log(path.toString());
        let newMap = new Map();
        savePropertiesToObject(properties,newMap);
        if(newMap.size != properties.length){
            return;
        }

        try{
            replaceReferNode(newMap,referencePaths,scope);
        }catch(e){
            console.log();
        }
        newMap.clear();
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

        let {constantViolations,referencePaths} = binding;
        // if(constantViolations.length != 1){
        //     return;
        // }
        // console.log(path.toString());
        let newMap = new Map();
        savePropertiesToObject(properties,newMap);
        if(newMap.size != properties.length){
            return;
        }

        try{
            replaceReferNode(newMap,referencePaths,scope);
        }catch(e){
            console.log();
        }
        newMap.clear();
    },
}
traverse(ast,decodeObject);

traverse(ast,constantFold);

const judgment_IfConditonal = {
    // 判断if条件，并删除不执行的代码
    IfStatement(path){
        let {parentPath,node,scope} = path;
        let {test,consequent,alternate} = node;
        if(!types.isBooleanLiteral(test)){
            return;
        }
        
        let true_node = test.value?consequent:alternate;
        if(parentPath.isBlockStatement() && types.isBlockStatement(true_node)){
            let {body} = true_node;
            for(let expression of body){
                path.insertBefore(expression);
            }
            path.remove();
        }else{
            path.insertBefore(true_node);
            path.remove()
        } 
        scope.crawl();
    },
    // 判断三目表达式，删除不执行的代码
    ConditionalExpression(path){
        let {test} = path.node;
        if(!types.isBooleanLiteral(test)){
            return;
        }

        if(test.value){
            path.replaceWith(path.node.consequent);
        }else{
            path.replaceWith(path.node.alternate);
        }

    },
}
traverse(ast,judgment_IfConditonal);

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
ast = parser.parse(generator(ast).code);
traverse(ast,removeDecode);

// ast = parser.parse(generator(ast).code);
traverse(ast,transform_literal);


const rectify_IfFor = {
    // 处理for循环和if的格式问题
    ForStatement(path){
        let {body} = path.node;
        if(!types.isBlockStatement(body)){
            let body_ = body;
            path.node.body = types.BlockStatement([]);
            if(!types.isEmptyStatement(body_)){
                path.node.body.body.push(body_);
            }

        } 
    },
    IfStatement(path){
        let {consequent,alternate} = path.node;

        if(consequent && !types.isBlockStatement(consequent)){
            path.node.consequent = types.BlockStatement([consequent]);
        }
        if(alternate && !types.isBlockStatement(alternate)){
            path.node.alternate = types.BlockStatement([alternate]);
        }
        path.scope.crawl();
    }
}
traverse(ast,rectify_IfFor);


const slove_Sequence_ = {
    // 处理代码块中的逗号表达式
    SequenceExpression(path){
        let {parentPath,node,scope} = path;
        if(!parentPath.isExpressionStatement()){
            return;
        }

        let {expressions} = node;
        if(expressions.length <= 1){
            return;
        }

        let lastExpression = expressions.pop();
        for(let expression of expressions){
            path.insertBefore(types.ExpressionStatement(expression));
        }
        path.replaceWith(lastExpression);
        scope.crawl();
    },
}
traverse(ast,slove_Sequence_);



let {code} = generator(ast)
fs.writeFile('decode.js',code,(err)=>{})