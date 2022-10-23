

// 浏览器全屏截图
// chrome.windows.getCurrent(function (win){

//     chrome.tabs.captureVisibleTab(win.id,{"format":"png"}, function(imgUrl) { 
//     	// $('#imgg').attr("src",imgUrl);
// 		var bg = chrome.extension.getBackgroundPage();
// 		bg.test({cmd:'search',value:imgUrl});
//         console.log(imgUrl);
//     });

// });

// window.open('https://codepen.io/?cursor=ZD0wJm89MSZwPTEmdj02NzQ2NA==');



// 调用后台JS
$('#invoke_background_js').click(e => {

	// 调用背景方法
	// var value=$('#keyswords').val();

	// let url="https://www.jq22.com/daima"+value;

	// // 这个是设置关键词
	// getCurrentTabId(tabId => {
	// 	chrome.tabs.update(tabId, {url:url});
	// });


	// chrome.tabs.captureVisibleTab(null, function(img) {
	// 	console.log(img)
	//     // callback of captureVisibleTab，img a string start with data://
	//     var my_img = new Image();
	//     my_img.onload = function(){
	//         // execute after the img was loaded
	//         console.log(img)
	//     };
	//     my_img.src = img;
	// });



});

// $('#open_url_new_tab').click(() => {
// 	chrome.tabs.create({url: 'https://www.baidu.com'});
// });


// function newtabs(tab){
// 	chrome.tabs.create({url: tab});
// }



// 获取当前选项卡ID
function getCurrentTabId(callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].id: null);
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





// // 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	// console.log('收到来自content-script的消息：');
	// console.log(request, sender, sendResponse);
	// sendResponse('我是popup，我已收到你的消息：' + JSON.stringify(request));
});

// popup与content-script建立长连接
// $('#connect_to_content_script').click(() => {
// 	getCurrentTabId((tabId) => {
// 		var port = chrome.tabs.connect(tabId, {name: 'test-connect'});
// 		port.postMessage({question: '你是谁啊？'});
// 		port.onMessage.addListener(function(msg) {
// 			alert('收到长连接消息：'+msg.answer);
// 			if(msg.answer && msg.answer.startsWith('我是'))
// 			{
// 				port.postMessage({question: '哦，原来是你啊！'});
// 			}
// 		});
// 	});
// });



// // 向content-script主动发送消息
// function sendMessageToContentScript(message, callback)
// {
// 	getCurrentTabId((tabId) =>
// 	{
// 		chrome.tabs.sendMessage(tabId, message, function(response)
// 		{
// 			if(callback) callback(response);
// 		});
// 	});
// }

// // 向content-script注入JS片段
// function executeScriptToCurrentTab(code)
// {
// 	getCurrentTabId((tabId) =>
// 	{
// 		chrome.tabs.executeScript(tabId, {code: code});
// 	});
// }

// // 获取当前选项卡ID
// function getCurrentTabId(callback)
// {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
// 	{
// 		if(callback) callback(tabs.length ? tabs[0].id: null);
// 	});
// }


// 显示桌面通知
// $('#show_notification').click(e => {
// 	chrome.notifications.create(null, {
// 		type: 'image',
// 		iconUrl: 'img/icon.png',
// 		title: '祝福',
// 		message: '骚年，祝你圣诞快乐！Merry christmas!',
// 		imageUrl: 'img/sds.png'
// 	});
// });

