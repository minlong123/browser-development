

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


document.addEventListener('DOMContentLoaded', function()
{

	if(curhref.indexOf("yingxiao.pinduoduo.com/marketing/main/center/odin/list") == -1){
		return;
	}

	// 抖音直播界面
	if(curhref.indexOf("yingxiao.pinduoduo.com/marketing/main/center/odin/list") != -1){
		
			console.log("进来了");

			// 批量编辑
			setTimeout(function(){


				console.log("test")
				$('.anq-table-tbody tr').eq(2).children("td").eq(3).children("div").children("div").children("span").click();
				
				setTimeout(function(){

					console.log($('.maxWidth'))


					// document.querySelector(".anq-input-number-input-wrap").firstElementChild.value=5.55
					$('.maxWidth').each(function(index,item){
	
						if(!$(item).hasClass("anq-popover-hidden")){
	
							console.log($(item));
							
							// $(item).find("input").focus();

							// $(item).find("input").attr("value","5.55")

							// $(item).find("input").attr("aria-valuenow","5.55")
							// injectCustomJs()
		

							injectCustomJs()
							// $(item).find("input")[0].dispatchEvent(new Event('input'))
							// let tt=$(item).find("input")
							// let evtt = document.createEvent("HTMLEvents");
							// evtt.initEvent("input", true, true);
							// tt.dispatchEvent(evtt)

							

							// $('.anq-input-number-input').val("5.55")
							setTimeout(function(){
								$(item).find('.anq-popover-footer').children("button").eq(0).click();
							},1000)
							
	
						
						}
	
	
					})

				},2000)










				// $('.anq-table-tbody tr').each(function(index,item){

				// 	if(index > 1){

						


				// 		setTimeout(function(){

				// 			console.log("test")
				// 			$(item).children("td").eq(3).children("div").children("div").children("span").click();

				// 			$('.maxWidth').each(function(index,item){

				// 				if(!$(item).hasClass("anq-popover-hidden")){

				// 					$(item).find("input").click();
				// 					$(item).find("input").attr("value","5.55")
				// 					$(item).find("input").attr("aria-valuenow","5.55")
				// 					// $('.anq-input-number-input').val("5.55")
				// 					$(item).find('.anq-popover-footer').children("button").eq(0).click();


				// 				}


				// 			})

				// 			// $('.anq-input-number-input').attr("value","5.55")
				// 			// $('.anq-input-number-input').attr("aria-valuenow","5.55")
				// 			// // $('.anq-input-number-input').val("5.55")
				// 			// $('.anq-popover-footer>button').click();

				// 		},5000)

				// 	}
				// })





			},4000)


			// 批量删除
			// setTimeout(function(){

			// 	$('.anq-table-tbody tr').each(function(index,item){

			// 		$(item).children("td").eq(5).find(".ant-dropdown-trigger").click();
			// 		setTimeout(function(){

			// 			$(".ant-dropdown-placement-bottomLeft").each(function(index,item){
							
			// 				if(!$(item).hasClass("ant-dropdown-hidden")){

			// 					$(item).children("ul").children("li").eq(2).click();
			// 				}

			// 			})

			// 			$(".ant-dropdown-menu")$('.ant-dropdown-menu').children("li").eq(2).click();

			// 		},10000)

			// 	})

			// },4000)


			

	}




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


	// 调用函数进行批量修改
	if(request.cmd == 'editval'){

		let valls=request.value;

		


	}


	// 调用函数进行批量删除
	if(request.cmd == 'delall'){

		let valls=request.value;
		if(valls == "123"){


		}

		


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