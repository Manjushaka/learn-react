let dom = document.getElementById('box');
function setWidth() {
  console.log('invoke setWidth function.');
  let windowWidth = window.innerWidth;
  if (windowWidth >= 1000) return;
  dom.style.width = windowWidth + 'px';
}

// 防抖
document.body.onresize = avoidShak(setWidth, 300);

function avoidShak(fn, time) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    let context = this;
    let _arguments = args;
    timer = setTimeout(function() {
      fn.apply(context, _arguments);
    }, time);
  }
}

//  节流
function throttle(fn, time) {
  let isNeedInvoke = true;
  return function(...args) {
    if(!isNeedInvoke) return;
    let context = this;
    let _arguments = args;
    isNeedInvoke = false;
    setTimeout(function() {
      fn.apply(context, _arguments);
      isNeedInvoke = true;
    }, time);
  }
}

window.onresize = throttle(setWidth, 300);
