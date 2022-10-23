
let news="";

var keywords="";
let image="";
// console.log("初始化调用")
let page =1;
let arr=[];
let alldata=[];
let exportdata=[];
let tabss="https://codepen.io/?cursor=ZD0xJm89MCZwPTEmdj02NzMyMg==";
let lasttime="";//上一次时间

let html=""


if(alldata.length == 0){

    let stt=getStdat();

    if(stt){

        if(stt.length > 0){

            alldata=stt[0];
            showdatas();

        }else{


        }
    }

}



// chrome.tabs.create({url: chrome.extension.getURL('backgrounds.html')});


// 一刷新页面就会自动执行下面的代码
function newtabs(tab){
    chrome.tabs.create({url: tab},function(tabs){
        // console.log(tabs)
        arr.push(tabs.id);
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


// 导出数据
function exportsdata(){

    // 将数据整理好
    let aoa = [
        ['ID','标题',"消费金额监听"], // 特别注意合并的地方后面预留2个null
    ];
    

     $('.alltrda').each(function(index,item){

        let ht=$(item).children("td").eq(2).children("div").eq(0).text()+'\n\n'+$(item).children("td").eq(2).children("div").eq(1).text()+"\n\n"+$(item).children("td").eq(2).children("div").eq(2).text()+'\n\n';
        aoa.push([$(item).children("td").eq(0).text(),$(item).children("td").eq(1).text(),ht]);

     })

    chrome.tabs.query({}, function(tabs){ 

        for(var i =0;i<tabs.length;i++){
            chrome.tabs.sendMessage(tabs[i].id,{cmd:'exports',value:aoa},function(response) { });
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


function getStdat(){

    if(localStorage.getItem("alldadd") != null){

        let ddd=JSON.parse(localStorage.getItem("alldadd"));
        return ddd;

    }else{
        return false;
    }
    

}



// 每次只保留三个数组
function setStorsss(data){


    let ddd=[];
    
    if(localStorage.getItem("alldadd") != null){

        // console.log(localStorage.getItem("alldadd"));
        ddd=JSON.parse(localStorage.getItem("alldadd"));
        if(ddd.length ==3){
            ddd.shift();
        }
        console.log("执行1次");
        ddd[ddd.length]=data;

    }else{
        console.log("执行2次");
        ddd[0]=data;
    }
    // console.log(ddd);
    // console.log(JSON.stringify(ddd));
    // localStorage.setItem("alldadd",JSON.stringify(ddd));

}


// 刷新当前的页面
// function refresurl(){


// }

$(document).on("click",'.copyid',function(){

    console.log($(this).siblings(".proid").text());


})

var clipboard = new ClipboardJS('.copyid')
// 显示用户反馈/捕获复制/剪切操作后选择的内容
 clipboard.on('success', function (e) {

    e.clearSelection();//清除选中样式（蓝色）
    

})
 clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});


function accSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}



function showdatas(){

    let htm="";

    if(alldata.length == 1 && $("#ttbb tr").length == 1){

        for(let j=0;j<alldata[0].length;j++){

            htm+="<tr class='alltrda' id='rows"+alldata[0][j].id+"' data-ddcprice='0'>";
            htm+="<td class='proid'>"+alldata[0][j].id+"</td><td>"+alldata[0][j].title+"</td>";
            htm+="<td data-monye="+alldata[0][j].xiao+" class='listmon"+alldata[0][j].id+"'><div>"+alldata[0][j].tim+"消耗了"+alldata[0][j].xiao+"元</td><td class='mons"+alldata[0][j].id+"'>0</td></div>";
            htm+="<td class='copyid' data-clipboard-text="+alldata[0][j].id+">复制</td></tr>"
        }
        $('#ttbb').append(htm);

    }else{

        htm="";
        $('.alltrda').remove();

        for(let j=0;j<alldata[0].length;j++){

            htm+="<tr class='alltrda' id='rows"+alldata[0][j].id+"' data-ddcprice='0'>";
            htm+="<td class='proid'>"+alldata[0][j].id+"</td><td>"+alldata[0][j].title+"</td>";
            htm+="<td data-monye="+alldata[0][j].xiao+" class='listmon"+alldata[0][j].id+"'><div>"+alldata[0][j].tim+"消耗了"+alldata[0][j].xiao+"元</td><td class='mons"+alldata[0][j].id+"'>0</td></div>";
            htm+="<td class='copyid' data-clipboard-text="+alldata[0][j].id+">复制</td></tr>"

        }
        $('#ttbb').append(htm);
        htm="";
        // console.log("第二批数据");
        // console.log(alldata.length);
        hb="";
        for(let j=0;j<alldata.length;j++){

            if(j > 0){

                for(let s=0;s<alldata[j].length;s++){

                    if(alldata.length == 3 && j == 1){

                        $('.listmon'+alldata[j][s].id).attr("data-monye",alldata[j][s].xiao)

                    }
                    

                    let hb="<div>"+alldata[j][s].tim+"消耗了"+alldata[j][s].xiao+"元</div>";
                    $('.listmon'+alldata[j][s].id).prepend(hb);

                    let mm=accSub(alldata[j][s].xiao,$('.listmon'+alldata[j][s].id).data("monye"));//差额
                    $('#rows'+alldata[j][s].id).attr("data-ddcprice",mm);
                    $('.mons'+alldata[j][s].id).html(mm);


                    
                }
            }
        }

        let domss=$('.alltrda');
        // 对dom进行排序
        domss.sort(function (a,b) {
            //a 表示任意的 li 标签 
            //b 表示任意的 li 标签
            // console.log(a)
            return $(a).data("ddcprice")-$(b).data("ddcprice")
           
        })
        $('#ttbb').append(domss);


    }
    



}



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log('收到来自content-script的消息：');
    sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
    // console.log(request.message);
    // 传递过来的数据
    // console.log(request.greeting);
    if(request.type == 1){

        console.log("过来了一次");
        // 没有数据的时候

        if(lasttime == request.nexturl){
            console.log("重复数据")
            return;
        }else{
            lasttime=request.nexturl
        }
        
        if(alldata.length == 0){


            alldata.push(request.greeting);
            console.log("0次");
        
        }else{

            if(alldata.length == 3){
                alldata.shift();
                
            }
            alldata[alldata.length]=request.greeting;
            // setStorsss(alldata);
            console.log("+1次");

        }
        console.log(alldata);
        setTimeout(function(){
            showdatas();
        },2000)



    }

});


