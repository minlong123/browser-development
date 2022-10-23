// var input_list = document.querySelectorAll("input");

// input_list.forEach(function(element) {
//     element.onclick = function() {
//         alert("你点击了这个input元素!");
//     };
// });

console.log('这是content script!');


// // 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function()
{
	// injectCustomJs();
	// 注入自定义JS
	console.log(location.host+"页面第一次加载");

	if(location.host == "www.baidu.com"){
		
		// 页面刚加载的时候，就要执行下面的这段代码，不过要判断$('#content_left>div')存不存在
		initTieba();
		
	}


	// injectCustomJs();
	// // 给谷歌搜索结果的超链接增加 _target="blank"
	// if(location.host == 'www.google.com.tw')
	// {
	// 	var objs = document.querySelectorAll('h3.r a');
	// 	for(var i=0; i<objs.length; i++)
	// 	{
	// 		objs[i].setAttribute('_target', 'blank');
	// 	}
	// 	console.log('已处理谷歌超链接！');
	// }
	// else if(location.host == 'www.baidu.com')
	// {
	// 	function fuckBaiduAD()
	// 	{
	// 		if(document.getElementById('my_custom_css')) return;
	// 		var temp = document.createElement('style');
	// 		temp.id = 'my_custom_css';
	// 		(document.head || document.body).appendChild(temp);
	// 		var css = `
	// 		/* 移除百度右侧广告 */
	// 		#content_right{display:none;}
	// 		/* 覆盖整个屏幕的相关推荐 */
	// 		.rrecom-btn-parent{display:none;}'
	// 		/* 难看的按钮 */
	// 		.result-op.xpath-log{display:none !important;}`;
	// 		temp.innerHTML = css;
	// 		console.log('已注入自定义CSS！');
	// 		// 屏蔽百度推广信息
	// 		removeAdByJs();
	// 		// 这种必须用JS移除的广告一般会有延迟，干脆每隔一段时间清楚一次
	// 		interval = setInterval(removeAdByJs, 2000);
			
	// 		// 重新搜索时页面不会刷新，但是被注入的style会被移除，所以需要重新执行
	// 		temp.addEventListener('DOMNodeRemoved', function(e)
	// 		{
	// 			console.log('自定义CSS被移除，重新注入！');
	// 			if(interval) clearInterval(interval);
	// 			fuckBaiduAD();
	// 		});
	// 	}
	// 	let interval = 0;
	// 	function removeAdByJs()
	// 	{
	// 		$('[data-tuiguang]').parents('[data-click]').remove();
	// 	}
	// 	fuckBaiduAD();
	// 	initCustomPanel();
	// 	initCustomEventListen();
	// }
});


function initTieba(){
	var c=document.querySelector('#content_left>div');
	if(!c){
		setTimeout(initTieba,1000);
	}else{
		getbaidudata();

	}
		
}



// 下面方法确实会实现分页，但是每次url都会重新加载，页面刷新，都要从第一页重新开始，后面改进需要将这段代码放到背景页来控制页数。
function getbaidudata($page){

	
	let all=$('#page').find("a");

	if($page){

		var i = $page;
		all.each(function(index,item){
			// console.log(i);
			
			if($(this).text() == i){
				// console.log($(this).text()+"text");
				// console.log($(this));
				$(this)[0].click();
				window.scrollTo(0,document.documentElement.offsetHeight-window.innerHeight)
				getbaidudata();
				return false;
			}
		})

	}else{

		setTimeout(function(){

			var arr=[];
			$('#content_left>div').each(function(index,item){
				var texts=$(this).find('h3 a').text();
				texts=texts.replace('/n',"");
				texts=texts.replace(/\s+/g,"");
				if(texts != ""){
					arr.push(texts);
				}
			});

			sendMessageToBackground(arr);



		},2000)



	}
	// 点击分页数据
	// console.log($('#page').find("a"));

	
}


// function initCustomPanel()
// {
// 	var panel = document.createElement('div');
// 	panel.className = 'chrome-plugin-demo-panel';
// 	panel.innerHTML = `
// 		<h2>injected-script操作content-script演示区：</h2>
// 		<div class="btn-area">
// 			<a href="javascript:sendMessageToContentScriptByPostMessage('你好，我是普通页面！')">通过postMessage发送消息给content-script</a><br>
// 			<a href="javascript:sendMessageToContentScriptByEvent('你好啊！我是通过DOM事件发送的消息！')">通过DOM事件发送消息给content-script</a><br>
// 			<a href="javascript:invokeContentScript('sendMessageToBackground()')">发送消息到后台或者popup</a><br>
// 		</div>
// 		<div id="my_custom_log">
// 		</div>
// 	`;
// 	document.body.appendChild(panel);
// }

// // 向页面注入JS,注入失败
// function injectCustomJs()
// {
// 	jsPath = './js/inject.js';
// 	var temp = document.createElement('script');
// 	temp.setAttribute('type', 'text/javascript');
// 	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
// 	temp.src = chrome.extension.getURL(jsPath);
// 	// temp.onload = function()
// 	// {
// 	// 	// 放在页面不好看，执行完后移除掉
// 	// 	this.parentNode.removeChild(this);
// 	// };
// 	document.body.appendChild(temp);
// }

// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log("收到后台的消息或前台的消息");
	// console.log('收到来自 ' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "popup或者background") + ' 的消息：', request);
	console.log(request);

	// 设置关键词
	// if(request.cmd=='setkeys'){

	// 	// $('#kw').val(request.value);
	// 	// var fomrs=$('#form');
	// 	// form.submit();

	// }

	// 翻页
	if(request.cmd == 'search') {

		$('#kw').val(request.value);
		if(request.page != 1){
			getbaidudata(request.page);
		}
	}

});

// // 主动发送消息给后台
// // 要演示此功能，请打开控制台主动执行sendMessageToBackground()
function sendMessageToBackground(message) {

	// console.log(message);
	chrome.runtime.sendMessage({greeting:message,keyword:$('#kw').val()}, function(response) {
		// tip('收到来自后台的回复：' + response);
		// console.log("收到来自后台的回复");
		// console.log(response);
	});


}

// // 监听长连接
// chrome.runtime.onConnect.addListener(function(port) {
// 	console.log(port);
// 	if(port.name == 'test-connect') {
// 		port.onMessage.addListener(function(msg) {
// 			console.log('收到长连接消息：', msg);
// 			tip('收到长连接消息：' + JSON.stringify(msg));
// 			if(msg.question == '你是谁啊？') port.postMessage({answer: '我是你爸！'});
// 		});
// 	}
// });

// window.addEventListener("message", function(e)
// {
// 	console.log('收到消息：', e.data);

// 	// if(e.data && e.data.cmd == 'invoke') {
// 	// 	eval('('+e.data.code+')');
// 	// }
// 	// else if(e.data && e.data.cmd == 'message') {
// 	// 	tip(e.data.data);
// 	// }


// }, false);


// function initCustomEventListen() {
// 	var hiddenDiv = document.getElementById('myCustomEventDiv');
// 	if(!hiddenDiv) {
// 		hiddenDiv = document.createElement('div');
// 		hiddenDiv.style.display = 'none';
// 		hiddenDiv.id = 'myCustomEventDiv';
// 		document.body.appendChild(hiddenDiv);
// 	}
// 	hiddenDiv.addEventListener('myCustomEvent', function() {
// 		var eventData = document.getElementById('myCustomEventDiv').innerText;
// 		tip('收到自定义事件：' + eventData);
// 	});
// }

// var tipCount = 0;
// // 简单的消息通知
// function tip(info) {
// 	info = info || '';
// 	var ele = document.createElement('div');
// 	ele.className = 'chrome-plugin-simple-tip slideInLeft';
// 	ele.style.top = tipCount * 70 + 20 + 'px';
// 	ele.innerHTML = `<div>${info}</div>`;
// 	document.body.appendChild(ele);
// 	ele.classList.add('animated');
// 	tipCount++;
// 	setTimeout(() => {
// 		ele.style.top = '-100px';
// 		setTimeout(() => {
// 			ele.remove();
// 			tipCount--;
// 		}, 400);
// 	}, 3000);
// }