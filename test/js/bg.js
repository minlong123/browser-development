let page=1;
let news="";
// 预留一个方法给popup调用
function testBackground(value,key) {

    $.ajax({
        url: 'https://meansss.zaierkeji.com/api/v1/ceshi',
        type: 'POST',
        dataType: 'json',
        data:{baidudata:value,keyword:key}
    }).then(function(res){
        console.log(res);
   
        // 将正确信息返回content_script
        // sendResponse({'status': 200});

    }, function(res){
        // 将错误信息返回content_script
        // sendResponse({'status': 500});
        console.log(res);

    });
}

function stop(){
    if(news){
        clearInterval(news);
    }
    page=1;
}

// 预留一个方法给popup调用，然后这里调用页面方法
function test(obj) {
    // console.log(obj);
    page = 1;

    // console.log(obj);
    if(news){
        clearInterval(news);
    }
    news=setInterval(function(){

        console.log(page);
        // sendMessageToContentScript({cmd:'search',value:obj.value,page:page}, function(response)
        // {
        //  console.log('来自content的回复：'+response);
        // });   
        // chrome.runtime.sendMessage({cmd:'search',value:obj.value,page:page});

        // 给所有tab页面发送消息，即使是不活跃的tab
        chrome.tabs.query({}, function(tabs){ 

            for(var i =0;i<tabs.length;i++){
                chrome.tabs.sendMessage(tabs[i].id, {cmd:'search',value:obj.value,page:page}, function(response) { });
            }
            

        }); 


        page++;

    },10000)


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



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log('收到来自content-script的消息：');
    // console.log(request, sender, sendResponse);
    // sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));

    // 传递过来的数据
    console.log(request);

    testBackground(request.greeting,request.keyword);



});