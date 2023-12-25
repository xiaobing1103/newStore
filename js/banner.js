window.onload = () => {
  var lb = document.querySelector("#toleft1");
  var rb = document.querySelector("#right-btn1");
  var ul = document.querySelector("#wrap-ul");
  var lis = ul.getElementsByTagName("li");
  var classes = ["b1", "b1", "cc", "b1", "b1", "b1"];
  // 加多少个图片 这里加多少个b1 同时body里加多少个<li class="b1"><img src="地址" alt=""></li>
  // var classes = ["b1", "b1", "cc", "b1", "b1", "b1", "b1", "b1", "b1"]
  function toright() {
    var last_class = classes.pop();
    classes.unshift(last_class);
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = classes[i]; //因为cl发生了变化 所以lis[i]的classname也要跟着变
    }
  }
  function toleft1() {
    var first_class = classes.shift();
    classes.push(first_class);
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = classes[i]; //因为classes发生了变化 所以lis[i]的className也要跟着变
    }
  }
  rb.onclick = toright;
  lb.onclick = toleft1;
  // 定时器
  timer = setInterval(toright, 2000);
  // 鼠标进来暂停 清除定时器
  ul.onmouseenter = function () {
    clearInterval(timer);
    timer = null;
  };
  // 鼠标出去 重开定时器
  ul.onmouseleave = () => {
    timer = setInterval(toright, 2000);
  };
};
