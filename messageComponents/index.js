(function (global) {
  // message组件函数
  function message(content, type = "info") {
    const messageContainer = document.getElementById("message-container");

    // 创建dom
    const messageBox = document.createElement("div");
    messageBox.className = `message-box ${type}`;
    messageBox.innerText = content;

    // 添加dom
    messageContainer.appendChild(messageBox);

    // 等待多少时间将message移除
    setTimeout(() => {
      messageContainer.removeChild(messageBox);
    }, 1000);
  }

  // 暴露函数到全局
  global.message = message;
})(window);

// How to use:
// message('This is a success message', 'success');
// message('This is an error message', 'error');
// message('This is an info message', 'info');
