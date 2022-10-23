
function changInputValue(inputDom,newText){
	let lastValue = inputDom.value;
	inputDom.value = newText;
	let event = new Event('input', { "bound Xt": true });
	event.simulated = true;
	let tracker = inputDom._valueTracker;
	if (tracker) {
  	    tracker.setValue(5.55);
	}
	inputDom.dispatchEvent(event);
}
 
var objInput = document.querySelector(".maxWidth .anq-input-number-input-wrap").firstElementChild;
changInputValue(objInput,'bound Xt');


function fireKeyEvent(element, evtType, keyChar) {
    element.focus();
    var KeyboardEventInit = {key:keyChar, code:"", location:0, repeat:false, isComposing:false};
    var evtObj = new KeyboardEvent(evtType, KeyboardEventInit);
    element.dispatchEvent(evtObj);
}

var objInput = document.querySelector('#id');
fireKeyEvent(objInput,"keydown","40");

// function fireKeyEvent(element, evtType, keyChar) {
//     element.focus();
//     var KeyboardEventInit = {key:keyChar, code:"", location:0, repeat:false, isComposing:false};
//     var evtObj = new KeyboardEvent(evtType, KeyboardEventInit);
//     element.dispatchEvent(evtObj);
// }

// var objInput = document.querySelector(".maxWidth .anq-input-number-input-wrap").firstElementChild;
// fireKeyEvent(objInput,"keydown","a11");

//   /**
//      * 触发指定事件
//      * @param eventName：事件名称
//      * @param targetElement：触发事件的对象
//      */
// function fireEvent(eventName, targetElement) {
//     if (document.createEvent) {
//         const event = document.createEvent('HTMLEvents');
//         event.initEvent(eventName, true, false);
//         targetElement.dispatchEvent(event);
//     } else if (document.createEventObject) {//IE
//         targetElement.fireEvent('input');
//     }
// }


// document.querySelector(".maxWidth .anq-input-number-input-wrap").firstElementChild.value="5.55"

// fireEvent('input',casess);//输出123

// let obj=document.querySelector(".maxWidth .anq-input-number-input-wrap").firstElementChild
// if ("createEvent" in document) {
//     var evt = document.createEvent("HTMLEvents");
//     evt.initEvent("change", true, false);
//     obj.dispatchEvent(evt);
// } else obj.fireEvent("onchange");


// // casess.value='5.55'
// // var event = document.createEvent('HTMLEvents')
// // event.initEvent("input", true, true)
// // event.eventType ="message"
// // casess.dispatchEvent(event)