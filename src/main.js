// 公共处理js
// 好像也没什么可以调用

// 创建
window.winApp = window.winApp || {};
// 引入项目公共值，如App、device、等等
let config = require('./common/config');

winApp = Object.assign(winApp, config);
