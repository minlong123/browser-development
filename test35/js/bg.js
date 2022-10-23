
let news="";
var aoa = [
    ['关键词','搜索关键词'],
];
var keywords="";
let image="";
let page =1;
let arr=[];
let allurls=[];
let statu=false;
let tabss="";
let alltabs=[];
let crrstat=true;
let count=0;

let allz=[
    ["w0wq9@barmail.icu","w0wq9@barmail.icu1","PQuWPa6PP715532","WTJ2AHMC"],
    ["1ogez@barmail.icu","1ogez@barmail.icu1","H3SA4E1a5679899","QEWGVB1U"],
    ["w2s9u@barmail.icu","w2s9u@barmail.icu1","RvNR36W16058170","KBXC1EL3"],
    ["kv6s3@barmail.icu","kv6s3@barmail.icu1","d56zxvq3k044392","2XFLQ4HE"],
    ["iykcc@barmail.icu","iykcc@barmail.icu1","1wy21hdfw866183","YQKFAEJ0"],
    ["4rwj4@barmail.icu","4rwj4@barmail.icu1","p9x7fa9mz489467","OX6H5J4W"],
    ["jq2iz@barmail.icu","jq2iz@barmail.icu1","xwh8ae4ak769482","H2QE6539"],
    ["telrh@barmail.icu","telrh@barmail.icu1","5xfmzkgdp508655","IS0GNVT4"],
    ["ihqrq@barmail.icu","ihqrq@barmail.icu1","k93yanw1c163683","9IPVZ8DN"],
    ["any9h@barmail.icu","any9h@barmail.icu1","T841TNHUO863159","GW5JOQB6"],
    ["x9chp@barmail.icu","x9chp@barmail.icu1","G7AXJQdud358009","2JFZLBV9"],
    ["vsrge@barmail.icu","vsrge@barmail.icu1","ZVYjhHb12144316","U3C7ITXR"],
    ["0xolk@barmail.icu","0xolk@barmail.icu1","rrqAeG2sk671034","95R3LTQE"],
    ["q5n0a@barmail.icu","q5n0a@barmail.icu1","crVWOeZBA860680","W9RVHTX0"],
    ["eo8mr@barmail.icu","eo8mr@barmail.icu1","OwQBO1qkq076114","OSZXCIN1"],
    ["lr71y@barmail.icu","lr71y@barmail.icu1","hjKUSCVgP364349","MUXJI5S6"],
    ["80ncu@barmail.icu","80ncu@barmail.icu1","VNdkU2pOr693014","AKJGYRNT"],
    ["cfm95@barmail.icu","cfm95@barmail.icu1","wDYytPOD2852203","KSI9LHNY"],
    ["syz1j@barmail.icu","syz1j@barmail.icu1","wSw1VnVnt368906","YHM2S13T"],
    ["scg0z@barmail.icu","scg0z@barmail.icu1","mCLqLumXc594135","OAP0V2DN"],
    ["21f5c@barmail.icu","21f5c@barmail.icu1","sZ2B2dagh633566","ME50AG2H"],
    ["ox7oo@barmail.icu","ox7oo@barmail.icu1","UhUDcYaBx046454","WX2L4R8G"],
    ["8rlaq@barmail.icu","8rlaq@barmail.icu1","YQQeBNf6j212647","GH2XT5YZ"],
    ["obhib@barmail.icu","obhib@barmail.icu1","dTYvhNBkX838549","PLXUN0MY"],
    ["nkqze@barmail.icu","nkqze@barmail.icu1","WquPgmFfc301745","J05XFZ7V"],
    ["g9cc4@barmail.icu","g9cc4@barmail.icu1","h4athNaxV117788","IVRJQBKM"],
    ["k62cj@barmail.icu","k62cj@barmail.icu1","z3FvP9JP3485496","FENOJBUM"],
    ["keg97@barmail.icu","keg97@barmail.icu1","NJy5UbHEV193775","Z1ULEYVD"],
    ["j3vqj@barmail.icu","j3vqj@barmail.icu1","XuD7gWu1H782545","KWMNHCB9"],
    ["9ihzg@barmail.icu","9ihzg@barmail.icu1","9V1LLKYOA214268","WAU63G9E"],
    ["94ezm@barmail.icu","94ezm@barmail.icu1","tRSK4uYSK926077","TGVUXI5K"],
    ["q4gzv@barmail.icu","q4gzv@barmail.icu1","9WCP27cn4729119","34270CYX"],
    ["0d8cg@barmail.icu","0d8cg@barmail.icu1","GVzHuNg9s040016","40TSRBUF"],
    ["q6nlw@barmail.icu","q6nlw@barmail.icu1","gybZ2YRLQ464182","K36RQFUM"],
    ["6nr9c@barmail.icu","6nr9c@barmail.icu1","pgAw2zJrr932989","JUM51L6H"],
    ["2kzkf@barmail.icu","2kzkf@barmail.icu1","RnGYZTcRD201831","C9FEU7JT"],
    ["iat3q@barmail.icu","iat3q@barmail.icu1","86Sm663rs612034","JE3ZTVK8"],
    ["83n52@barmail.icu","83n52@barmail.icu1","GNMrvaazg808179","9XYK4AJB"],
    ["qfv2h@barmail.icu","qfv2h@barmail.icu1","xBVcqXucj033987","3VYJ2E0F"],
    ["5f3a9@barmail.icu","5f3a9@barmail.icu1","mQ3h8c8a2571265","7I9D42CX"],
    ["1yp11@barmail.icu","1yp11@barmail.icu1","AZDzGOdDC228372","1MC3SILO"],
    ["i9erg@barmail.icu","i9erg@barmail.icu1","A5L37y5G6785405","1Z7SQWHG"],
    ["7lgyu@barmail.icu","7lgyu@barmail.icu1","ZTGkv625A880011","KVXRB91Y"],
    ["iede3@barmail.icu","iede3@barmail.icu1","RAxNRPkAy546981","XTORDANI"],
    ["r41xf@barmail.icu","r41xf@barmail.icu1","SExOCAvDK415492","9IST6LW5"],
    ["zbd6q@barmail.icu","zbd6q@barmail.icu1","wvrdsdYPE128618","AK91HUP0"],
    ["pu682@barmail.icu","pu682@barmail.icu1","etLLjxxwv339074","H7LEAT2F"],
    ["z045g@barmail.icu","z045g@barmail.icu1","g965cK3TD112594","1WIAHJT9"],
    ["dueyn@barmail.icu","dueyn@barmail.icu1","cLWWp4AKt470762","N12LRJ8O"],
    ["qwy3j@barmail.icu","qwy3j@barmail.icu1","RxjwhpEcM125927","J4HD6E5V"],
    ["adfpk@barmail.icu","adfpk@barmail.icu1","NxJZrfnOA488513","Y6A3QG5O"],
    ["fn5pe@barmail.icu","fn5pe@barmail.icu1","bsHEGGTGB382024","ODT26F9X"],
    ["3xbrt@barmail.icu","3xbrt@barmail.icu1","khX1CmfUn574227","4EXO289Y"],
    ["piv6y@barmail.icu","piv6y@barmail.icu1","w2dEHxcT9251851","5VRB8L2H"],
    ["t4hae@barmail.icu","t4hae@barmail.icu1","hT1XyvmzC908741","O6X2RGZL"],
    ["4vkeh@barmail.icu","4vkeh@barmail.icu1","MHQXWWOhn569135","6X35JKPH"],
    ["kbkd6@barmail.icu","kbkd6@barmail.icu1","ryB2BzNR6259544","W3IAX16J"],
    ["daak3@barmail.icu","daak3@barmail.icu1","VQOfaaG1R971508","F9GBX2V3"],
    ["eedpf@barmail.icu","eedpf@barmail.icu1","xeqp5VUUv590134","B9WZGE3H"],
    ["e09kk@barmail.icu","e09kk@barmail.icu1","RP482pGQd690535","HMOP7TBZ"],
    ["4mspf@barmail.icu","4mspf@barmail.icu1","QLgLdWBms419111","MWG87AYN"],
    ["co5zy@barmail.icu","co5zy@barmail.icu1","4XrKSBrbw439408","VXJIKQD7"],
    ["423j2@barmail.icu","423j2@barmail.icu1","9qZFbDqEQ554424","AC3GYDZP"],
    ["0xq7x@barmail.icu","0xq7x@barmail.icu1","sqCMMNHFx732084","5G0VYCNI"],
    ["ug3w9@barmail.icu","ug3w9@barmail.icu1","OkDA8Ofsp797036","EPDBZFT1"],
    ["66fs1@barmail.icu","66fs1@barmail.icu1","SAbme2L7q672296","MGA948FJ"],
    ["ukrpg@barmail.icu","ukrpg@barmail.icu1","YsDTRTDkG657949","H8ZMCL2K"],
    ["vl6fw@barmail.icu","vl6fw@barmail.icu1","fDWvUW9tw962161","GJU73F1E"],
    ["d3ob3@barmail.icu","d3ob3@barmail.icu1","FQ3FsRNvx207254","E6XO1JTC"],
    ["vcuxh@barmail.icu","vcuxh@barmail.icu1","BKHzcdMJz407374","XUA3ZFRV"],
    ["lfcwq@barmail.icu","lfcwq@barmail.icu1","6xnW7y3Nm389725","TQ4OL6C3"],
    ["0iugb@barmail.icu","0iugb@barmail.icu1","p8bK4WCXE420891","HFWBOJAV"],
    ["jm1jg@barmail.icu","jm1jg@barmail.icu1","hFgXJQFpQ268606","BMFRIN7H"],
    ["0pnfw@barmail.icu","0pnfw@barmail.icu1","JVaAqZZLH545914","YUQ03S6D"],
    ["ve643@barmail.icu","ve643@barmail.icu1","vneRpK5jr346206","Q0UVYERS"],
    ["e5muo@barmail.icu","e5muo@barmail.icu1","J5fRqZ65s289079","JS7Y93D2"],
    ["2gpoq@barmail.icu","2gpoq@barmail.icu1","2jhe4QeBB115895","RNZETW0L"],
    ["e89yb@barmail.icu","e89yb@barmail.icu1","kJ2BTwfSJ232629","S4J0ZK5O"],
    ["88gbh@barmail.icu","88gbh@barmail.icu1","ghuKbDN2q756761","2TESP534"],
    ["f299e@barmail.icu","f299e@barmail.icu1","ZuPJkcFq2516935","LCEKS9JZ"],
    ["tazw4@barmail.icu","tazw4@barmail.icu1","jau5tM8F2276470","M1HI3F7O"],
    ["u5k8k@barmail.icu","u5k8k@barmail.icu1","jA96kMQQK549481","WYMNC7J9"],
    ["ebmhw@barmail.icu","ebmhw@barmail.icu1","XH2RTR3OF371199","5SXZHLK4"],
    ["kjk2n@barmail.icu","kjk2n@barmail.icu1","ZYmPGUVgt927493","9BFTSL0D"],
    ["ay0bx@barmail.icu","ay0bx@barmail.icu1","8wmXQB8zf840099","TQ7G456H"],
    ["mkm9s@barmail.icu","mkm9s@barmail.icu1","3KjZUrkb7243008","7CX4MQSY"],
    ["bm0xz@barmail.icu","bm0xz@barmail.icu1","Ss947DMCm536365","DJHAEQ5B"],
    ["085k7@barmail.icu","085k7@barmail.icu1","qRUdDA4Lv815354","1O5C3BJM"],
    ["wpsn1@barmail.icu","wpsn1@barmail.icu1","wOPaTWEHX126815","D2BSZI1J"],
    ["rcc6d@barmail.icu","rcc6d@barmail.icu1","9aYBT6Qdn337484","1302SYI4"],
    ["zox0g@barmail.icu","zox0g@barmail.icu1","G2sLxcXqJ058556","WPXVR1QL"],
    ["9tdxb@barmail.icu","9tdxb@barmail.icu1","8Ju492muw326468","XZTLUFD3"],
    ["v1d8d@barmail.icu","v1d8d@barmail.icu1","Bs9njkAmd098585","CNXMGEO7"],
    ["dzum7@barmail.icu","dzum7@barmail.icu1","afsB4evLC296284","CX6Q5GDP"],
    ["d8wmq@barmail.icu","d8wmq@barmail.icu1","NaX7GUrUP069422","IJ3R57DZ"],
    ["f8fm7@barmail.icu","f8fm7@barmail.icu1","BBwxyAnYn021233","CX0R7I8A"],
    ["rj71m@barmail.icu","rj71m@barmail.icu1","CApeTF8xm296347","6YBQ8F2R"],
    ["fwbns@barmail.icu","fwbns@barmail.icu1","YFsvBTUJa358867","0R5V7MYN"],
    ["pwryt@barmail.icu","pwryt@barmail.icu1","8aUTVJ7sn510486","WY6GDSMO"],
    ["y3lvn@barmail.icu","y3lvn@barmail.icu1","ZDPRUVgMb956850","HW3OX4LN"]
];

let steamz=["bcyfb668","lef750810J"];
function updatestross(arrs){
    sendMessageToContentScript("initstroage",arrs,steamz);
}


function setStorss(arrs){
    console.log(arrs[0]);
    console.log("背景页面设置storage")
	localStorage.setItem("actionstatuss","false")
	localStorage.setItem("quuser",arrs[0]);
	localStorage.setItem("qupass",arrs[1]);
	localStorage.setItem("swuser",steamz[0]);
	localStorage.setItem("swpass",steamz[1]);
	localStorage.setItem("stuser",arrs[2]);
	localStorage.setItem("stpass",arrs[3]);
}
console.log("第几次="+count)


setStorss(allz[count])


function delcookies(url="https://accounts.krafton.com"){

    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_dd_s"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_abck"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"XSRF-TOKEN"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"sessionId"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"ak_bmsc"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_icl_current_language"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"bm_sv"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_gtmUID"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"bm_sz"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"fr"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_fbp"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_dd_s"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"pubg_logged_in"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_abck"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"XSRF-TOKEN"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"remixlang"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"tmr_reqNum"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_gcl_au"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_ym_d"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"tmr_lvid"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_gid"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_ym_uid"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_ga"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"_ym_isad"})
    chrome.cookies.remove({'url':"https://accounts.krafton.com",'name':"tmr_lvidTS"})

    chrome.cookies.getAll({domain:"accounts.krafton.com"}, function(cookies) {
        for(var i=0; i<cookies.length;i++) {
            console.log(url + cookies[i].path);
            console.log(cookies[i].name)
            chrome.cookies.remove({url:"https://accounts.krafton.com", name: cookies[i].name});
        }
    });

}


delcookies();
function newtabs(tab){
    chrome.tabs.create({url: tab},function(tabs){
        arr.push(tabs.id);
        allurls.push(tab);
    });
}

function loalint(){
    console.log("第二次了="+count)
    if(count > 0 && allz.length > count){
        delcookies();
        newtabs("https://accounts.krafton.com/login")
        setStorss(allz[count])
    }
}


setTimeout(function(){
    if(tabss == ""){
        newtabs("https://accounts.krafton.com/login")
        console.log("正在设置localstroage");
        delcookies();
    }
},1000)






function open_all_tab(){
	// 获取所有的页签
	chrome.tabs.getAllInWindow(null, function(tabs){
		for (let i = 0; i < tabs.length; i++) {
            if(i != tabs.length-1){
                try {
                    chrome.tabs.remove(tabs[i].id);
                } catch (error) {
                    console.log("删除失败一个");
                }

                alltabs.push(tabs[i].id);
            }
        
		} 
	});
}

function testBackground(value,biaoshi) {
    console.log("调用中");

    $.ajax({
        url: 'http://bz.zaierkeji.com/savecodepenimg',
        type: 'POST',
        dataType: 'json',
        data:{file:value,biaoshi:biaoshi}
    }).then(function(res){
    }, function(res){
        console.log(res);
    });
}

function exportsdata(){

    chrome.tabs.query({}, function(tabs){ 

        for(var i =0;i<tabs.length;i++){
            chrome.tabs.sendMessage(tabs[i].id,{cmd:'exports',value:aoa,page:page},function(response) { });
        }
        

    }); 

}

function sendMessageToContentScript(message,datas,swtics, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id,{cmd:message,datas:datas,swtics:swtics}, function(response)
        {
            if(callback) callback(response);
        });
    });
}


function getCurrentTabId(callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        if(callback) callback(tabs.length ? tabs[0].id: null);
    });
}

function sendhtmldata(htmls,tit,desc,key,biaoshi) {
    $.ajax({
        url: 'http://bz.zaierkeji.com/savecodepenhtmls',
        type: 'POST',
        dataType:'json',
        data:{htmls:htmls,tit:tit,biaoq:key,desc:desc,biaoshi:biaoshi}
    }).then(function(res){
    }, function(res){

    });

}



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log('收到来自content-script的消息：');
    tabss=request.nexturl;
    if(request.type == 6){
        newtabs(tabss);
    }


    if(!statu){

        if(allurls.indexOf("https://accounts.krafton.com/auth/twitch") != -1){
            statu=true;

            newtabs("https://accounts.krafton.com/personal-info");
    
            return;
        }

    }


    if(request.type == 1){
        
        newtabs(tabss);
    }

    if(request.type == 2){
        newtabs(tabss);
    }
    if(request.type == 3){

        chrome.storage.local.set({"actionstatuss":"false"})
        allurls=[];
        count=count+1;
        statu=false;
        open_all_tab();
        loalint();
        
    }
    if(request.type == 4){

        crrstat=false;
    }
    if(request.type == 5){
        updatestross(allz[count]);
    }

});


