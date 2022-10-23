
let news="";
var aoa = [
    ['关键词','搜索关键词'], // 特别注意合并的地方后面预留2个null
];
var keywords="";
let image="";
// console.log("初始化调用")
let page =1;
let arr=[];
let allurls=[];
let statu=false;
let tabss="";
let alltabs=[];
let crrstat=true;
let count=0;

// 全球账号和steam账号
let allz=[
 
    // ["tw6kt@barmail.icu","C5N8vloZ@","H3SA4E1a5679899","QEWGVB1U"],
    // ["2an74@barmail.icu","GIaJPi5L@","RvNR36W16058170","KBXC1EL3"],
    // ["puf62@barmail.icu","FjE8jJ4Z@","d56zxvq3k044392","2XFLQ4HE"],
    // ["3mcz3@barmail.icu","h39m573F@","1wy21hdfw866183","YQKFAEJ0"],
    // ["yv917@barmail.icu","5WSc5S6v@","p9x7fa9mz489467","OX6H5J4W"],
    // ["05mgn@barmail.icu","t14VV291@","xwh8ae4ak769482","H2QE6539"],
    
    ["ppl84@barmail.icu","9Wu2Bvt9@","5xfmzkgdp508655","IS0GNVT4"],
    ["udt0h@barmail.icu","J8N8EhNY@","k93yanw1c163683","9IPVZ8DN"],
    ["wxbhf@barmail.icu","5BMstYj6@","T841TNHUO863159","GW5JOQB6"],
    ["z3e86@barmail.icu","ehZj1774@","G7AXJQdud358009","2JFZLBV9"],
    ["lreb9@barmail.icu","i4Tm8Ycl@","ZVYjhHb12144316","U3C7ITXR"],
    ["oohtj@barmail.icu","luxPn2lb@","rrqAeG2sk671034","95R3LTQE"],
    ["q23al@barmail.icu","yY3GG5yI@","crVWOeZBA860680","W9RVHTX0"]

];

// switch账号
let steamz=["nlmymvktup","EmMSpUbS3123"];

// function setStorss(){

// 	// 当然任务的处理进度,false为刚开始
// 	localStorage.setItem("actionstatuss","false")
// 		// 全球账号
// 	localStorage.setItem("quuser","jbjn8664@biotechar.com");
// 	// 全球密码
// 	localStorage.setItem("qupass","jbjn8664@biotechar.com");

// 	// Switch账号
// 	localStorage.setItem("swuser","nelakjojmz");
// 	// Switch密码
// 	localStorage.setItem("swpass","GcoJCpeZ2893");

// 	// Steam账号
// 	localStorage.setItem("stuser","bcyfb668");
// 	// Steam密码
// 	localStorage.setItem("stpass","lef750810J");

// }

// setStorss()
function updatestross(arrs){
    sendMessageToContentScript("initstroages",arrs,steamz);
}


function setStorss(arrs){
    console.log(arrs[0]);
    console.log("背景页面设置storage")
	// // 当然任务的处理进度,false为刚开始
	localStorage.setItem("actionstatuss","false")
		// 全球账号
	localStorage.setItem("quuser",arrs[0]);
	// 全球密码
	localStorage.setItem("qupass",arrs[1]);

	// Switch账号
	localStorage.setItem("swuser",steamz[0]);
	// Switch密码
	localStorage.setItem("swpass",steamz[1]);

	// Steam账号
	localStorage.setItem("stuser",arrs[2]);
	// Steam密码
	localStorage.setItem("stpass",arrs[3]);

    
    // sendMessageToContentScript("initstroage",arrs,steamz);



    // chrome.storage.local.clear();
    // console.log("不执行吗");
    // chrome.storage.local.set({"actionstatuss":"false"});
    // chrome.storage.local.set({"quuser":quuser});
    // chrome.storage.local.set({"qupass":qupass});
    // chrome.storage.local.set({"swuser":"nelakjojmz"});
    // chrome.storage.local.set({"swpass":"GcoJCpeZ2893"});
    // chrome.storage.local.set({"stuser":stuser});
    // chrome.storage.local.set({"stpass":stpass});

    
    // chrome.storage.local.remove("SZMKUin")
    // chrome.storage.local.remove("_ym55933042_lastHit")
    // chrome.storage.local.remove("tmr_lvidTS")
    // chrome.storage.local.remove("_ym55933042_reqNum")
    // chrome.storage.local.remove("_ym83022696_lastHit")
    // chrome.storage.local.remove("_ym83022696_lsid")
    // chrome.storage.local.remove("tmr_reqNum")
    // chrome.storage.local.remove("_ym83022696_reqNum")
    // chrome.storage.local.remove("tmr_lvid")
    // chrome.storage.local.remove("SZMKSessionId")
    // chrome.storage.local.remove("_ym_uid")
    // chrome.storage.local.remove("_ym55933042_lsid")
    // chrome.storage.local.remove("_ym_wv2rf:83022696:0")
    // chrome.storage.local.remove("_ym_retryReqs")


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


// 一刷新页面就会自动执行下面的代码
function newtabs(tab){
    chrome.tabs.create({url: tab},function(tabs){
        // console.log(tabs)
        arr.push(tabs.id);
        allurls.push(tab);
    });
}

function loalint(){
    console.log("第二次了="+count)
    if(count > 0 && allz.length > count){

        // setInterval(function(){
        delcookies();
        newtabs("https://accounts.krafton.com/login")
        // localStorage.setItem("actionstatuss","false")
        setStorss(allz[count])
        
        // },100000)
    
    }

}


setTimeout(function(){
    if(tabss == ""){


        newtabs("https://accounts.krafton.com/login")
        // localStorage.setItem("actionstatuss","false")
        
        console.log("正在设置localstroage");
        delcookies();
    }
},1000)






function open_all_tab(){
	// 获取所有的页签
	chrome.tabs.getAllInWindow(null, function(tabs){
		for (let i = 0; i < tabs.length; i++) {
			// 在控制台打印出页签的tabid
			// console.log(tabs[i].id);
            if(i != tabs.length-1){

                
                try {
                    chrome.tabs.remove(tabs[i].id);
                } catch (error) {
                    console.log("删除失败一个");
                }

                alltabs.push(tabs[i].id);
            }
            
			// 通过tabid向每一个页签发送消息
			// chrome.tabs.sendMessage(tabs[i].id, {type: 'xxx'});
		}
        // chrome.tabs.remove(alltabs);
        
	});
}


// 575

// if(tabs == ""){
//     newtabs("https://codepen.io/?cursor=ZD0wJm89MSZwPTEmdj02NzQ2NA==")
// }
// newtabs("https://codepen.io/?cursor=ZD0wJm89MSZwPTEmdj02NzQ2NA==")
// chrome.tabs.remove(arr);
// arr=[];


// setInterval(function(){

//     chrome.tabs.remove(arr);
//     arr=[];
//     if(tabss != ""){
//         newtabs(tabss)
//         tabss="";
//     }

// },120000)



// 120000  2分钟  60*2*1000

// 预留一个方法给popup调用，然后这里调用页面方法
// function test(obj) {

//     console.log("调用&")
//     console.log(obj);
//     image=obj.value
//     // console.log(image);
//     testBackground(image);

// }


// 预留一个方法给popup调用
function testBackground(value,biaoshi) {
    console.log("调用中");

    $.ajax({
        url: 'http://bz.zaierkeji.com/savecodepenimg',
        type: 'POST',
        dataType: 'json',
        data:{file:value,biaoshi:biaoshi}
    }).then(function(res){
        // console.log(res);
        // 将正确信息返回content_script
        // sendResponse({'status': 200});
    }, function(res){
        // 将错误信息返回content_script
        // sendResponse({'status': 500});
        console.log(res);
    });
}

// function stop(){
//     if(news){
//         clearInterval(news);
//     }
//     page=1;
// }


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


// 获取当前选项卡ID
function getCurrentTabId(callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        if(callback) callback(tabs.length ? tabs[0].id: null);
    });
}


// 预留一个方法给popup调用
function sendhtmldata(htmls,tit,desc,key,biaoshi) {
    // console.log("1")
    // return;
    $.ajax({
        url: 'http://bz.zaierkeji.com/savecodepenhtmls',
        type: 'POST',
        dataType:'json',
        data:{htmls:htmls,tit:tit,biaoq:key,desc:desc,biaoshi:biaoshi}
    }).then(function(res){
        // console.log("返回结果了吗")
        // console.log(res);
        // 将正确信息返回content_script
        // sendResponse({'status': 200});
    }, function(res){
        // 将错误信息返回content_script
        // sendResponse({'status': 500});
        // console.log(res);
    });

}



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log('收到来自content-script的消息：');
    // console.log(request, sender, sendResponse);
    // sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
    tabss=request.nexturl;
    if(request.type == 6){
        newtabs(tabss);
    }


    if(!statu){

        if(allurls.indexOf("https://accounts.krafton.com/auth/twitch") != -1){
            statu=true;
            // sendMessageToContentScript("zhuxiao")
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

        // localStorage.setItem("actionstatuss","false")
        chrome.storage.local.set({"actionstatuss":"false"})
        allurls=[];
        count=count+1;
        statu=false;
        open_all_tab();
        loalint();
        
    }
    if(request.type == 4){
        // 正在注销
        crrstat=false;
        // allurls=[];
        // chrome.tabs.remove(arr);
        // statu=false;
        // open_all_tab();
        // chrome.tabs.remove(alltabs);
    }
    if(request.type == 5){
        updatestross(allz[count]);
    }

    if(request.type == 7){
        updatestross(allz[count]);
    }


    // 传递过来的数据
    // console.log(request.greeting);
    // if(request.type == 1){


    //     let ars=request.greeting;
    //     tabss=request.nexturl;

    //     if(ars.length != 0){
    //         for(var i=0;i<ars.length;i++){

    //             (function(arss,ii){
    //                 setTimeout(function(){
    //                     newtabs(arss[ii]);
    //                 },ii*20000)
    //             })(ars,i)
    //         }
    //     }

    // }


    // if(request.type == 2){

    //     var html=request.greeting;
    //     var tit=request.tit;
    //     var desc=request.desc;
    //     var key=request.key;
    //     var biaoshi=request.biaoshi;
    //     console.log(html)
    //     sendhtmldata(html,tit,desc,key,biaoshi);
    // }

    // if(request.type == 3){

    //     chrome.tabs.captureVisibleTab({ format: 'png', quality: 100},(dataUrl)=>{
    //         console.log(dataUrl);

    //         testBackground(dataUrl,request.greeting);
    //     });

    // }



});


