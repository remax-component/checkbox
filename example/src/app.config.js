const pages = ["pages/index/index"];

exports.ali = {
  pages,
  window: {
    defaultTitle: "Remax Checkbox Demo",
    titleBarColor: "#282c34",
  },
};

exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: "Remax Checkbox Demo",
    navigationBarBackgroundColor: "#282c34",
  },
};

exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: "Remax Checkbox Demo",
    navigationBarBackgroundColor: "#282c34",
  },
};

exports.web = {
  // 页面默认标题
  title: "页面默认标题",
  // 配置的页面
  pages: ["pages/index/index"],
  // 是否全局开启下拉刷新
  pullToRefresh: false,
  // 触底滚动的默认距离，单位 px
  reachBottomOffset: 50,
  // tab bar 配置
  tabBar: {
    // 背景色
    backgroundColor: "#fff",
    // 选中状态的 tab 标题颜色
    activeTitleColor: "red",
    // tab 标题颜色
    titleColor: "blue",
    // tab 对象列表
    items: [
      {
        // tab 标题
        title: "标题",
        // tab 对应页面路由
        url: "/pages/index/index",
        // tab 显示的图片地址
        image: "图片地址",
        // tab 选中后的显示的图片地址
        activeImage: "选择图片地址",
      },
    ],
  },
};
