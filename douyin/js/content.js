

console.log('这是content script!');

let curhref=location.href;
// console.log(curhref);

// biaoshi=biaoshi.join("");
// console.log(biaoshi);
// 截图


// 获取当前时间
function getCurr(){
	
	var tim=new Date();
	var years=tim.getFullYear();
	var months=tim.getMonth()+1;
	var data=tim.getDate();
	var hours=tim.getHours();
	var minutes=tim.getMinutes();
	var seconds=tim.getSeconds();
	return years+"-"+months+"-"+data+" "+hours+":"+minutes+":"+seconds;
}

let currtime=getCurr();

function refresurl(){

	setInterval(function(){

		window.history.go(0);
	// 1分钟
	},10*60*1000)
	
}




function getDatas(){

	let ids=[];
	let xiao=[];
	let yusuan=[];
	let tits=[];
	let result=[];

	// 这里列表有多少行，就会获取多少行
	let currtii=setTimeout(function(){

		// $.each()
		// console.log($('.bui-table-tr')[11].html());
		
		if($('.bui-table-tr').length == 0){
			getDatas();
		}
		// return;
		$('.bui-table-tr').each(function(index,item){

			if(index >= $('.bui-table-tr').length/2){

				// 获取ID
				// console.log("左边的数据="+index);
				// console.log($(item).children("div").eq(10));
				// console.log($(item).children("div").eq(10)["prevObject"].children("div").eq(2).find(".ad_id").text())
				
				ids.push($(item).children("div").eq(10)["prevObject"].children("div").eq(2).find(".ad_id").text());

				tits.push($(item).children("div").eq(10)["prevObject"].children("div").eq(2).find(".name").text());


			}else{

				// 消耗多少元
				// console.log("右边的数据="+index);
				// console.log($(item).children("div").eq(10));
				// console.log($(item).children("div").eq(10).text());
				// let ttt=$(item).children("div").eq(10).text();

				// if($(item).children("div").eq(5).text().indexOf("-") != -1){

				// 	xiao.push($(item).children("div").eq(11).text());//消耗多少元

				// }else{

				// 	xiao.push($(item).children("div").eq(10).text());//消耗多少元
				// }
				// 界面上右边表格数第8列
				xiao.push($(item).children("div").eq(11).text());
				// yusuan.push($(item).children("div").eq(7).text().trim());//预算

			}

		});

	},5000)


	let currtiii=setTimeout(function(){

		for(let i=0;i<ids.length;i++){

			// let bb=[];
			// bb['id']=ids[i];
			// bb['title']=tits[i];
			// bb['yuan']=xiao[i]; 
			// bb['tim']=times;
			// result.push(bb);
			result.push({"id":ids[i].replace("ID:",""),"title":tits[i],"xiao":xiao[i].replace(/,/g,""),"tim":currtime});
		}

		console.log(result);
		if(result.length == 0){
			getDatas();
		}

		if(result.length != 0){

			sendMessageToBackground(1,result,currtime);
			result=[];
		}

	},7000)


}


// if(curhref.indexOf("codepen.io") != -1 && curhref.indexOf("cursor") == -1 ){

// 	// return;
// 	setTimeout(function(){
// 		sendMessageToBackground(3,biaoshi)
// 	},11000)
	
// }
// // 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function()
{


	
	// // injectCustomJs();
	// // 注入自定义JS
	// let curhref=location.href;
	// // console.log(curhref.split("/")[curhref.split("/").length-1]);
	// let biaoshi=curhref.split("/")[curhref.split("/").length-1];
	// return;
	if(curhref.indexOf("qianchuan.jinritemai.com/promotion") == -1 || curhref.indexOf("mg=live") == -1){
		return;
	}

	// 抖音直播界面
	if(curhref.indexOf("qianchuan.jinritemai.com/promotion") != -1 && curhref.indexOf("mg=live") != -1){
		
			console.log("进来了");

		
			refresurl();
			getDatas();


			


			



	}



	// console.log(location.href+"页面第一次加载");
	// initTieba();
	// if(curhref.indexOf('cursor') != -1){

	// 	// 禁用
	// 	// return;
	// 	// injectCustomJs();
	// 	// 页面刚加载的时候，就要执行下面的这段代码，不过要判断$('#content_left>div')存不存在
	// 	var arr=[];
	// 	setTimeout(function(){

	// 		$('.ItemPreviewCover-module_root-3ZIH_').each(function(index,item){
	// 			// console.log($(item).attr("href"));
	// 			arr.push($(item).attr("href"));
	// 		});

	// 		// 'data-direction="next"'
	// 		// 翻页
	// 		$('button[data-direction=next]').click();

	// 	},3000)

	// 	setTimeout(function(){
	// 		sendMessageToBackground(1,arr,location.href);
	// 	},4000)

	// }else{

	// 	// 需要编译，先编译，对html和css都要编译
	// 	if(!$('#view-compiled-html').hasClass("hide")){
	// 		$('#view-compiled-html').click();
	// 	}
		
	// 	if(!$('#view-compiled-css').hasClass("hide")){
	// 		$('#view-compiled-css').click();
	// 	}
	
		
	// 	setTimeout(function(){
	// 		injectCustomJs();
	// 	},3000)


	// 	setTimeout(function(){
			
	// 		console.log("这是内页");

	// 		console.log("1")
	// 		let data=JSON.parse($('#init-data').val()).__item;
	// 		let alldata=JSON.parse(data);
	// 		console.log(alldata);
	// 		// console.log(JSON.parse(data).css);
	//         // var codecss=alldata.css;
	//         // var codejs=alldata.js;
	//         // var codehtml=alldata.html;
	//         var sourc = alldata.resources;
	        
	// // "resources": [{
	// // 	"url": "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js",
	// // 	"order": 0,
	// // 	"resource_type": "js",
	// // 	"par_content": ""
	// // }],
	// 		let tit=$(document).attr("title");
	// 		let desc="";
	// 		let key=curhref;
	// 		var meta = document.getElementsByTagName('meta');
	// 		var share_desc = '';
	// 		for(i in meta){
	// 			if(typeof meta[i].name != "undefined" && meta[i].name.toLowerCase() == "twitter:description"){
	// 				desc = meta[i].content;
	// 			}
	// 		}
	// 		// console.log(tit);
	// 		// console.log(desc);
	//         var codehtml=localStorage.getItem("codehtml");
	//         var codecss=localStorage.getItem("codecss");
	//         var codejs=localStorage.getItem("codejs");

	// 		let html='';
	// 		var ccodec = '<style>\n' +codecss+ '\n</style>';

	// 		var codebb="";

	// 		if(codejs.indexOf('import') != -1 && codejs.indexOf("from") != -1){
	// 			codebb = '<scr' + 'ipt type="module">\n' +codejs+ '\n</scr' + 'ipt>';
	// 		}else{
	// 			codebb = '<scr' + 'ipt>\n' +codejs+ '\n</scr' + 'ipt>';
	// 		}
			


	// 		html +='<!DOCTYPE html>\n<head>\n<meta charset='+"'utf-8'"+'>\n<title>纯净开发模板</title>\n';

	//         html += "\n"+ccodec+'\n</head>\n<body>\n'+codehtml+'\n\n';

	//         for(let j=0;j<sourc.length;j++){
	//         	if(sourc[j].resource_type == 'js'){
	//         		var jqbb = sourc[j].url;
	//         		var codebbs = '<scr' + 'ipt src="'+jqbb+'">' + '</scr' + 'ipt>';
	//         		html += "\n"+codebbs+"\n";
	//         	}
	//         }

	//         html += codebb+'\n</body>\n\n</html>'+"";
	//         localStorage.removeItem("codehtml");
	//         localStorage.removeItem("codecss");
	//         localStorage.removeItem("codejs");


	//         console.log(html);
	// 		chrome.runtime.sendMessage({type:2,greeting:html,tit:tit,desc:desc,key:key,biaoshi:biaoshi}, function(response) {
	// 			// tip('收到来自后台的回复：' + response);
	// 			console.log("收到来自后台的回复");
	// 			// console.log(response);
	// 		});

	// 	},6000)

	// }




});


// // 向页面注入JS,注入失败
function injectCustomJs()
{

	jsPath = 'js/test.js';
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

	// 导出数据
	if(request.cmd == 'exports'){

		console.log(request.value);
		var aoa = request.value
		var sheet = XLSX.utils.aoa_to_sheet(aoa);
		// sheet['!merges'] = [
		// 	// 设置A1-C1的单元格合并
		// 	{s: {r: 0, c: 0}, e: {r: 0, c: 2}}
		// ];
		openDownloadDialog(sheet2blob(sheet), '数据.xlsx');
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