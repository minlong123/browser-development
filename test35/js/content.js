
console.log('这是content script!');

let curhref=location.href;
let crrustatuss=localStorage.getItem("actionstatuss");

function newtabs(tab){
    chrome.tabs.create({url: tab},function(tabs){
        arr.push(tabs.id);
    });
}



console.log(curhref);


document.addEventListener('DOMContentLoaded', function(){
	if(curhref.indexOf("www.twitch.tv/login") != -1){

		setTimeout(function(){

			intttt()
	
		},3000)

	}

	if(curhref == 'https://accounts.krafton.com/'){
		
		console.log("来到全球账号的首页")

		
		setTimeout(function(){
	
			// intttt();
			// $("a[class=\"button is-secondary icon-btn icon-arrow\"]").click();
			// $('.steam .item-footer').click();
			// $('.steam .button').click();
			// $('.steam a').click();
			// $('.steam .item-footer').click();
			// $('.steam .is-secondary').click();
			// $('.steam .icon-btn').click();
			// console.log('点了这么多,改成功了');
			// button is-secondary icon-btn icon-arrow
			// https://store.steampowered.com/oauth/login?response_type=token&state=6670c0e18c8ebe0e696a8124a78bd257&client_id=FC7EA02C
			
			// steam授权
			sendMessageToBackground(1,"open steam","https://accounts.krafton.com/auth/steam")

			// switch授权
			// sendMessageToBackground(1,"open steam","https://accounts.krafton.com/auth/twitch")

			// window.location.href="https://accounts.krafton.com/auth/steam";
			// window.open("https://accounts.krafton.com/auth/steam","_Self")
		},1000)
	}
	

	// 绑定steam成功之后获取的url
	// https://accounts.krafton.com/?message=link.success&messageType=success&platform=steam-oauth
	if(curhref.indexOf("ttps://accounts.krafton.com/?message=link.success&messageType=success&platform") != -1){


		// switch授权
		sendMessageToBackground(1,"open steam","https://accounts.krafton.com/auth/twitch")

	}


	// 注销账号
	if(curhref.indexOf("personal-info") != -1){

		// $('#btnId:last-child').click();
		console.log("注销")
		localStorage.setItem("actionstatuss","true")
		// chrome.storage.local.set({"actionstatuss":"true"})
		setTimeout(function(){

			// $(".is-tertiary").click();
			// $("button:contains('删除')").click();
			// $("button:contains('Delete')").click();
			$(".accordion").click();

			

		},3000)

		setTimeout(function(){

			// $(".is-tertiary").click();
			$("button:contains('删除')").click();

			$("button:contains('Delete')").click();
			// $('.control').click();
			
			zhuxiao();
			

			// sendMessageToBackground(4,"edit statu")

			// setTimeout(function(){

			// 	sendMessageToBackground(3,"del all")

			// },3000)


		},4000)

		// 过7秒，当前页面还是一样的话，直接刷新当前页面
		setTimeout(function(){

			sendMessageToBackground(6,"reset del","https://accounts.krafton.com/personal-info")

		},7000)
	}


	// https://id.twitch.tv/oauth2/authorize?force_verify=true&response_type=code&redirect_uri=https%3A%2F%2Faccounts.krafton.com%2Fauth%2Ftwitch%2Fcallback&scope=user%3Aread%3Aemail%20viewing_activity_read&state=B3p2ZRzqsLA5HqSlUDTTgiQU&client_id=mlpjzuoqffzsj3obfbtwhlxeuepuvh
	if(curhref.indexOf("id.twitch.tv/oauth2/authorize") != -1){

		setTimeout(function(){
			$('.js-authorize-text').click();
		},3000)

	}

	// console.log(location.href);
	// curhref=location.href;
	// console.log(curhref);
	// 刚登录的脚本
	if(curhref.indexOf(".krafton.com/login") != -1){


		// console.log($('.linked-account-container').length);
		// setTimeout(function(){

		// 	if($('.linked-account-container').length > 0){

		// 		$('.steam .button').click();
		// 		console.log("登录进来了");
		// 	}else{
		// 		setTimeout(function(){
		// 			injectCustomJs()
		// 		},1000)
		// 	}
			
		// },4000)
		// console.log(localStorage.getItem("actionstatuss"));
		
		setTimeout(function(){

			// 更新缓存
			if(crrustatuss == "true"){

				localStorage.setItem("actionstatuss","false")
				// chrome.storage.local.set({"actionstatuss":"false"})
				sendMessageToBackground(3,"del all")
				
	
			}else{
				sendMessageToBackground(5,"update storage")
	
				setTimeout(function(){
					injectCustomJs()
				},1000)
	
			}

		},3000)


	}

	// 输入steam账号密码登录
	// https://store.steampowered.com/oauth/login?response_type=token&state=c8c539bd14cc36cb5502e87da8a52628&client_id=FC7EA02C
	// https://store.steampowered.com/oauth/login?response_type=token&state=7a80947014a26ccf511b27f78b322251&client_id=FC7EA02C
	// https://store.steampowered.com//oauth/login?response_type=token&client_id=FC7EA02C&state=0412fd576342915b7a72a30db17861de
	if(curhref.indexOf("/oauth/login") != -1){

		// console.log($('.OpenID_Logout').length);
		// let ssss=false;
		// setTimeout(function(){

		if($('.OpenID_Logout').length > 0){
			logouts();
		}
		// 	// 	ssss=true;
				
		// 	// }
		console.log("steam登录")
		// 	// if(ssss){
		// 	// 	console.log("需要关掉它");
		// 	// 	$('.OpenID_Logout').click();
		// 	// }
		// 	$('.OpenID_Logout').click();

		// },1000)
		// console.log('点击退出');
		// $('.OpenID_Logout').click();
		// $('.OpenID_Logout a').click();
		// sendMessageToBackground(2,"log out","https://store.steampowered.com/")
		stemuser=localStorage.getItem("stuser");
		stpasss=localStorage.getItem("stpass");

		// stemuser=chrome.storage.local.get("stuser")
		// stpasss=chrome.storage.local.get("stpass")
		console.log(stemuser)
		console.log(stpasss)

		setTimeout(function(){

			// $('.OpenID_Logout').click();
			$("input[type=text]").val(stemuser);
			$("input[type=password]").val(stpasss);

			setTimeout(function(){
				// $("#imageLogin").hover();
				$("#imageLogin").click();
			},2000)

		},4000)

	}


	if(curhref.indexOf("https://store.steampowered.com//oauth/auth") != -1){

		setTimeout(function(){
			// $(".btn_grey_white_innerfade").hover();
			// $('.btn_grey_white_innerfade').click();
			document.querySelectorAll(".btn_grey_white_innerfade")[0].click()
		},3000)
		
	}


	// https://accounts.krafton.com/auth/steam/callback#error=access_denied&state=4ccfad7de1e5fde2375800e35359dd8e
	// 点击允许
	// https://store.steampowered.com//oauth/auth




})

// // // 注意，必须设置了run_at=document_start 此段代码才会生效
// document.addEventListener('DOMContentLoaded', function()
// {
// 	// // injectCustomJs();
// 	// // 注入自定义JS
// 	// let curhref=location.href;
// 	// // console.log(curhref.split("/")[curhref.split("/").length-1]);
// 	// let biaoshi=curhref.split("/")[curhref.split("/").length-1];
// 	// return;
// 	if(curhref.indexOf("codepen.io") == -1){
// 		return;
// 	}

// 	// console.log(location.href+"页面第一次加载");
// 	// initTieba();
// 	if(curhref.indexOf('cursor') != -1){

// 		// 禁用
// 		// return;
// 		// injectCustomJs();
// 		// 页面刚加载的时候，就要执行下面的这段代码，不过要判断$('#content_left>div')存不存在
// 		var arr=[];
// 		setTimeout(function(){

// 			$('.ItemPreviewCover-module_root-3ZIH_').each(function(index,item){
// 				// console.log($(item).attr("href"));
// 				arr.push($(item).attr("href"));
// 			});

// 			// 'data-direction="next"'
// 			// 翻页
// 			$('button[data-direction=next]').click();

// 		},3000)

// 		setTimeout(function(){
// 			sendMessageToBackground(1,arr,location.href);
// 		},4000)

// 	}else{

// 		// 需要编译，先编译，对html和css都要编译
// 		if(!$('#view-compiled-html').hasClass("hide")){
// 			$('#view-compiled-html').click();
// 		}
		
// 		if(!$('#view-compiled-css').hasClass("hide")){
// 			$('#view-compiled-css').click();
// 		}
	
		
// 		setTimeout(function(){
// 			injectCustomJs();
// 		},3000)


// 		setTimeout(function(){
			
// 			console.log("这是内页");

// 			console.log("1")
// 			let data=JSON.parse($('#init-data').val()).__item;
// 			let alldata=JSON.parse(data);
// 			console.log(alldata);
// 			// console.log(JSON.parse(data).css);
// 	        // var codecss=alldata.css;
// 	        // var codejs=alldata.js;
// 	        // var codehtml=alldata.html;
// 	        var sourc = alldata.resources;
	        
// 	// "resources": [{
// 	// 	"url": "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js",
// 	// 	"order": 0,
// 	// 	"resource_type": "js",
// 	// 	"par_content": ""
// 	// }],
// 			let tit=$(document).attr("title");
// 			let desc="";
// 			let key=curhref;
// 			var meta = document.getElementsByTagName('meta');
// 			var share_desc = '';
// 			for(i in meta){
// 				if(typeof meta[i].name != "undefined" && meta[i].name.toLowerCase() == "twitter:description"){
// 					desc = meta[i].content;
// 				}
// 			}
// 			// console.log(tit);
// 			// console.log(desc);
// 	        var codehtml=localStorage.getItem("codehtml");
// 	        var codecss=localStorage.getItem("codecss");
// 	        var codejs=localStorage.getItem("codejs");

// 			let html='';
// 			var ccodec = '<style>\n' +codecss+ '\n</style>';

// 			var codebb="";

// 			if(codejs.indexOf('import') != -1 && codejs.indexOf("from") != -1){
// 				codebb = '<scr' + 'ipt type="module">\n' +codejs+ '\n</scr' + 'ipt>';
// 			}else{
// 				codebb = '<scr' + 'ipt>\n' +codejs+ '\n</scr' + 'ipt>';
// 			}
			


// 			html +='<!DOCTYPE html>\n<head>\n<meta charset='+"'utf-8'"+'>\n<title>纯净开发模板</title>\n';

// 	        html += "\n"+ccodec+'\n</head>\n<body>\n'+codehtml+'\n\n';

// 	        for(let j=0;j<sourc.length;j++){
// 	        	if(sourc[j].resource_type == 'js'){
// 	        		var jqbb = sourc[j].url;
// 	        		var codebbs = '<scr' + 'ipt src="'+jqbb+'">' + '</scr' + 'ipt>';
// 	        		html += "\n"+codebbs+"\n";
// 	        	}
// 	        }

// 	        html += codebb+'\n</body>\n\n</html>'+"";
// 	        localStorage.removeItem("codehtml");
// 	        localStorage.removeItem("codecss");
// 	        localStorage.removeItem("codejs");


// 	        console.log(html);
// 			chrome.runtime.sendMessage({type:2,greeting:html,tit:tit,desc:desc,key:key,biaoshi:biaoshi}, function(response) {
// 				// tip('收到来自后台的回复：' + response);
// 				console.log("收到来自后台的回复");
// 				// console.log(response);
// 			});

// 		},6000)

// 	}


// });


// // 向页面注入JS,注入失败
function injectCustomJs()
{

	jsPath = 'js/test.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	document.body.appendChild(temp);
}


// // 向页面注入JS,注入失败\\\\\
function inttttjquery()
{

	jsPath = 'js/jquery.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	document.body.appendChild(temp);
}




function intttt()
{
	inttttjquery()

	jsPath = 'js/tests.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	document.body.appendChild(temp);
}


function logouts(){
	jsPath = 'js/testss.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	document.body.appendChild(temp);

}



function zhuxiao(){
	jsPath = 'js/testssss.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	document.body.appendChild(temp);
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

			sendMessageToBackground(2,arr);



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


function setStorss(steam,switchs){

	console.log("cent-script.s设置storage")
	// localStorage.clear();

	localStorage.setItem("actionstatuss","false")
		// 全球账号
	localStorage.setItem("quuser",steam[0]);
	// 全球密码
	localStorage.setItem("qupass",steam[1]);

	// Switch账号
	localStorage.setItem("swuser",switchs[0]);
	// Switch密码
	localStorage.setItem("swpass",switchs[1]);

	// Steam账号
	localStorage.setItem("stuser",steam[2]);
	// Steam密码
	localStorage.setItem("stpass",steam[3]);
}


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

	// 注销账号
	// if(request.cmd == 'zhuxiao') {



	// }

	// 初始化storage
	if(request.cmd == 'initstroage'){

		console.log(request.cmd);
		setStorss(request.datas,request.swtics);
		crrustatuss=localStorage.getItem("actionstatuss");

	}


	// 导出数据
	if(request.cmd == 'exports'){
		console.log(request.value);
		var aoa = request.value
		var sheet = XLSX.utils.aoa_to_sheet(aoa);
		// sheet['!merges'] = [
		// 	// 设置A1-C1的单元格合并
		// 	{s: {r: 0, c: 0}, e: {r: 0, c: 2}}
		// ];
		openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
	}

	// 翻页
	if(request.cmd == 'search') {

		$('#kw').val(request.value);
		if(request.page != 1){
			getbaidudata(request.page);
		}
	}

});

// // 主动发送消息给后台
// // 要演示此功能，请打开控制台主动执行
function sendMessageToBackground(type,message,nexturl="") {

	// console.log(message);
	chrome.runtime.sendMessage({type:type,greeting:message,nexturl:nexturl}, function(response) {
		// tip('收到来自后台的回复：' + response);
		console.log("收到来自后台的回复");
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




	function selectFile() {
		document.getElementById('file').click();
	}

	// 读取本地excel文件
	function readWorkbookFromLocalFile(file, callback) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook = XLSX.read(data, {type: 'binary'});
			if(callback) callback(workbook);
		};
		reader.readAsBinaryString(file);
	}

	// 从网络上读取某个excel文件，url必须同域，否则报错
	function readWorkbookFromRemoteFile(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function(e) {
			if(xhr.status == 200) {
				var data = new Uint8Array(xhr.response)
				var workbook = XLSX.read(data, {type: 'array'});
				if(callback) callback(workbook);
			}
		};
		xhr.send();
	}

	// 读取 excel文件
	function outputWorkbook(workbook) {
		var sheetNames = workbook.SheetNames; // 工作表名称集合
		sheetNames.forEach(name => {
			var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
			for(var key in worksheet) {
				// v是读取单元格的原始值
				console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
			}
		});
	}

	function readWorkbook(workbook) {
		var sheetNames = workbook.SheetNames; // 工作表名称集合
		var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
		var csv = XLSX.utils.sheet_to_csv(worksheet);
		document.getElementById('result').innerHTML = csv2table(csv);
	}

	// 将csv转换成表格
	function csv2table(csv)
	{
		var html = '<table>';
		var rows = csv.split('\n');
		rows.pop(); // 最后一行没用的
		rows.forEach(function(row, idx) {
			var columns = row.split(',');
			columns.unshift(idx+1); // 添加行索引
			if(idx == 0) { // 添加列索引
				html += '<tr>';
				for(var i=0; i<columns.length; i++) {
					html += '<th>' + (i==0?'':String.fromCharCode(65+i-1)) + '</th>';
				}
				html += '</tr>';
			}
			html += '<tr>';
			columns.forEach(function(column) {
				html += '<td>'+column+'</td>';
			});
			html += '</tr>';
		});
		html += '</table>';
		return html;
	}

	function table2csv(table) {
		var csv = [];
		$(table).find('tr').each(function() {
			var temp = [];	
			$(this).find('td').each(function() {
				temp.push($(this).html());
			})
			temp.shift(); // 移除第一个
			csv.push(temp.join(','));
		});
		csv.shift();
		return csv.join('\n');
	}

	// csv转sheet对象
	function csv2sheet(csv) {
		var sheet = {}; // 将要生成的sheet
		csv = csv.split('\n');
		csv.forEach(function(row, i) {
			row = row.split(',');
			if(i == 0) sheet['!ref'] = 'A1:'+String.fromCharCode(65+row.length-1)+(csv.length-1);
			row.forEach(function(col, j) {
				sheet[String.fromCharCode(65+j)+(i+1)] = {v: col};
			});
		});
		return sheet;
	}

	// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
	function sheet2blob(sheet, sheetName) {
		sheetName = sheetName || 'sheet1';
		var workbook = {
			SheetNames: [sheetName],
			Sheets: {}
		};
		workbook.Sheets[sheetName] = sheet;
		// 生成excel的配置项
		var wopts = {
			bookType: 'xlsx', // 要生成的文件类型
			bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
			type: 'binary'
		};
		var wbout = XLSX.write(workbook, wopts);
		var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
		// 字符串转ArrayBuffer
		function s2ab(s) {
			var buf = new ArrayBuffer(s.length);
			var view = new Uint8Array(buf);
			for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
			return buf;
		}
		return blob;
	}

	/**
	 * 通用的打开下载对话框方法，没有测试过具体兼容性
	 * @param url 下载地址，也可以是一个blob对象，必选
	 * @param saveName 保存文件名，可选
	 */
	function openDownloadDialog(url, saveName)
	{
		if(typeof url == 'object' && url instanceof Blob)
		{
			url = URL.createObjectURL(url); // 创建blob地址
		}
		var aLink = document.createElement('a');
		aLink.href = url;
		aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
		var event;
		if(window.MouseEvent) event = new MouseEvent('click');
		else
		{
			event = document.createEvent('MouseEvents');
			event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		}
		aLink.dispatchEvent(event);
	}

	// $(function() {
	// 	document.getElementById('file').addEventListener('change', function(e) {
	// 		var files = e.target.files;
	// 		if(files.length == 0) return;
	// 		var f = files[0];
	// 		if(!/\.xlsx$/g.test(f.name)) {
	// 			alert('仅支持读取xlsx格式！');
	// 			return;
	// 		}
	// 		readWorkbookFromLocalFile(f, function(workbook) {
	// 			readWorkbook(workbook);
	// 		});
	// 	});
	// 	loadRemoteFile('./sample/test.xlsx');
	// });
	
	function loadRemoteFile(url) {
		readWorkbookFromRemoteFile(url, function(workbook) {
			readWorkbook(workbook);
		});
	}

	function exportExcel() {
		var csv = table2csv($('#result table')[0]);
		var sheet = csv2sheet(csv);
		var blob = sheet2blob(sheet);
		openDownloadDialog(blob, '导出.xlsx');
	}