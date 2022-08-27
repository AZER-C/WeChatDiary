const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx799dc1ee723928b2",

  // 微信公众号的appsecret
  APP_SECRET: "763734a8874976073bc8ff3409b60fbc",

  // 微信公众号的模板ID
  TEMPLATE_ID: "YJ5uZxIQEN50SnG6hPi44uQu5e175mz1d6g4F1rCAjg",

  // 天行API的key
  TXApiKey: "b9ad2566cae4b3ebd002e460eeea4484",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "二哥",
      // 用户列表的`微信号`
      userId: "o-DOp5vFDpoJQ-m5u5rfgnYteRRw",
      // 星座
      star: "狮子座",
      // 生日 - 格式：08-22
      birthday: "08-16",
      // 城市 - 格式：支持省市县区
      city: "哈尔滨",
    },{
      // 男(女)朋友的名字（或昵称或网名）
      userName: "三弟",
      // 用户列表的`微信号`
      userId: "o-DOp5qz4NKrMLFT6zpEWoesPPeg",
      // 星座
      star: "处女座",
      // 生日 - 格式：08-22
      birthday: "08-27",
      // 城市 - 格式：支持省市县区
      city: "深圳",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2022-05-20",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: false,
    // 健康小提示
    healthtip: false,
    // 毒鸡汤
    duJiTang: false,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: false,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
