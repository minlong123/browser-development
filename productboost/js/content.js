

console.log('这是content script!');

let curhref=location.href;
let aoa = [
	['日期','收据',"描述","活动ID","金额"], // 特别注意合并的地方后面预留2个null
];


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

// 数据显示有延时
function getproductdata(){
	aoa = [
		['日期','收据',"描述","活动ID","金额"], // 特别注意合并的地方后面预留2个null
	];

	$('.row_59bv02').each(function(index,item){

		aoa.push([
			$(item).children("td").eq(0).text(),
			$(item).children("td").eq(1).text(),
			$(item).children("td").eq(2).text(),
			$(item).children("td").eq(3).text(),
			$(item).children("td").eq(4).text()
		]);
	})

	return aoa;


}

function getCurrentTime(){

	var tim=new Date();
	var years=tim.getFullYear();
	var months=tim.getMonth()+1;
	var data=tim.getDate();
	var hours=tim.getHours();
	var minutes=tim.getMinutes();
	var seconds=tim.getSeconds();
	return years+"年"+months+"月"+data+"日"+hours+"时"+minutes+"分"+seconds+"秒";

}


setTimeout(function(){

	$("#cbuton").click(function(){
		console.log("点击了");
		exporsts()
	})

},4000)




// // 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function()
{
	if(curhref.indexOf("com/product-boost-wallet") == -1){
		return;
	}
	if(curhref.indexOf("com/product-boost-wallet") != -1){

		setTimeout(function(){
			injectCustomJs();
		},2000)

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

// 导出数据
function exporsts(){

	var aoadatas=getproductdata();
	var sheet = XLSX.utils.aoa_to_sheet(aoadatas);
	openDownloadDialog(sheet2blob(sheet), getCurrentTime()+'数据.xlsx');


}


// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log("收到后台的消息或前台的消息");
	console.log(request);
	// 导出数据
	if(request.cmd == 'exports'){

		exporsts()
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