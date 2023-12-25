(function (global) {
  // 下拉框构造器
  function Dropdown(triggerId, menuId, options) {
    this.trigger = document.getElementById(triggerId);
    this.menu = document.getElementById(menuId);
    this.options = options || [];
    this.init();
  }

  // 初始化组件
  Dropdown.prototype.init = function () {
    // 循环创建options
    this.options.forEach((option) => {
      const menuItem = document.createElement("div");
      menuItem.className = "dropdown-menu-item";
      menuItem.textContent = option.label;
      menuItem.onclick = option.onClick;
      this.menu.appendChild(menuItem);
    });

    // 点击下拉框逻辑
    this.trigger.onclick = () => {
      const isHidden = this.menu.style.display === "none";
      this.menu.style.display = isHidden ? "block" : "none";
    };

    // 点击其他区域关闭下拉框
    document.addEventListener("click", (event) => {
      if (
        !this.trigger.contains(event.target) &&
        !this.menu.contains(event.target)
      ) {
        this.menu.style.display = "none";
      }
    });
  };

  // 将组件暴露再全局
  global.Dropdown = Dropdown;
})(window);
