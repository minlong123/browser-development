
let numsss=Math.floor(Math.random()*3000+1000);
console.log(numsss)


setTimeout(function(){

    document.querySelectorAll(".welcome-popup")[1].parentNode.removeChild(document.querySelectorAll(".welcome-popup")[1])
    document.querySelectorAll(".welcome-popup")[1].parentNode.removeChild(document.querySelectorAll(".welcome-popup")[1])

},Math.floor(Math.random()*2000+1000))
// let vvv="ifaf1331@russiaar.com"

setTimeout(function(){

    $("input[type=email]")[0].click()
    let t=$("input[type=email]")[0]
    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", true, true);
    t.value=localStorage.getItem("quuser");
    t.dispatchEvent(evt)

},3000)


setTimeout(function(){

    // $("input[type=password]").focus();
    // $("input[type=password]").click()
    $("input[type=password]")[0].click()
    let tt=$("input[type=password]")[0]
    let evtt = document.createEvent("HTMLEvents");
    evtt.initEvent("input", true, true);
    tt.value=localStorage.getItem("qupass");
    tt.dispatchEvent(evtt)

},numsss)

document.querySelector(".button--fullWidth").focus();
document.querySelectorAll("#btnId")[0].focus();
setTimeout(function(){
    // $("#btnId").click()
    // localStorage.clear();
    // document.querySelector(".button--fullWidth").click();
    // document.querySelectorAll("#btnId")[0].click();
    // document.querySelectorAll("#btnId")[0].click();//不会执行FunForMouseDown
    // document.querySelectorAll("#btnId")[0].click();
    // document.querySelector(".button--fullWidth").fireEvent("onclick");
    // document.querySelectorAll(".button--fullWidth").fireEvent("onmousedown");//会执行FunForMouseDown
    // document.querySelectorAll(".button--fullWidth").fireEvent("onmouseup");

    var ev = document.createEvent('HTMLEvents'); 
    ev.clientX = numsss
    ev.clientY = numsss
    ev.initEvent('mousedown', false, true); 
    document.querySelector(".button--fullWidth").dispatchEvent(ev)

    ev.initEvent('mouseup', false, true); 
    document.querySelector(".button--fullWidth").dispatchEvent(ev)
    
    ev.initEvent('click', false, true); 
    document.querySelector(".button--fullWidth").dispatchEvent(ev)


},12000)

setTimeout(function(){
    // localStorage.clear();
    window.history.go(0);
},15000)
// 15000



