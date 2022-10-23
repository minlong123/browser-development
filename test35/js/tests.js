
// let vvv="123456"

let t=$("input[type=text]")[0]
let evt = document.createEvent("HTMLEvents");
evt.initEvent("input", true, true);
t.value=localStorage.getItem("swuser");
t.dispatchEvent(evt)

let tt=$("input[type=password]")[0]
let evtt = document.createEvent("HTMLEvents");
evtt.initEvent("input", true, true);
tt.value=localStorage.getItem("swpass");
tt.dispatchEvent(evtt)


setTimeout(function(){
    $(".Layout-sc-nxg1ff-0").click()
},500)



