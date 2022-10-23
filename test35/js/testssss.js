
// let tt=$("input[type=password]")[0]
// let tt=document.querySelectorAll("#Password")[1]
let tt=$("input[type=password]")[4]
let evtt = document.createEvent("HTMLEvents");
evtt.initEvent("input", true, true);
// tt.value="ifaf1331@russiaar.com";
tt.value=localStorage.getItem("qupass")
tt.dispatchEvent(evtt)

setTimeout(function(){
    // $('.is-primary')[4].click()

    var ev = document.createEvent('HTMLEvents'); 
    ev.clientX = numsss
    ev.clientY = numsss
    ev.initEvent('mousedown', false, true); 
    $('.is-primary')[4].dispatchEvent(ev)

    ev.initEvent('mouseup', false, true); 
    $('.is-primary')[4].dispatchEvent(ev)
    
    ev.initEvent('click', false, true); 
    $('.is-primary')[4].dispatchEvent(ev)


},500)
