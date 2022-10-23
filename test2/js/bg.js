
let news="";
var aoa = [
    ['关键词','搜索关键词'], // 特别注意合并的地方后面预留2个null
];
var keywords="";
let image="";
// console.log("初始化调用")
let page =1;
let arr=[];
// 一刷新页面就会自动执行下面的代码
function newtabs(tab){
    chrome.tabs.create({url: tab},function(tabs){
        console.log(tabs)
        arr.push(tabs.id);
    });
}
// 575


setInterval(function(){

    if(page<4){

        newtabs("https://www.jq22.com/daima"+page)
        page++;
        chrome.tabs.remove(arr);
        arr=[];

    }
},160000)



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
        url: 'http://bz.zaierkeji.com/saveimg',
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



function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
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
        url: 'http://bz.zaierkeji.com/savehtmls',
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

    // 传递过来的数据
    // console.log(request.greeting);
    if(request.type == 1){

        let ars=request.greeting;
        if(ars.length != 0){
            for(var i=0;i<ars.length;i++){

                (function(arss,ii){
                    setTimeout(function(){
                        newtabs(arss[ii]);
                    },ii*15000)
                })(ars,i)
            }
        }
    }


    if(request.type == 2){

        var html=request.greeting;
        var tit=request.tit;
        var desc=request.desc;
        var key=request.key;
        var biaoshi=request.biaoshi;
        console.log(html)
        sendhtmldata(html,tit,desc,key,biaoshi);
    }

    if(request.type == 3){
        chrome.tabs.captureVisibleTab({ format: 'png', quality: 100},(dataUrl)=>{

            testBackground(dataUrl,request.greeting);
        });
    }



});


