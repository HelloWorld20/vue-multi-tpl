# 平安银行web前端框架

基于Vue-cli3搭建

## 运行

    npm run serve

本地访问

http://localhost:8080/business/（业务名称）.html

例如访问风险测评：[http://localhost:8080/business/evaluate/index.html](http://localhost:8080/business/evaluate/index.html)


## todo list

* 多页面配置 √（资源要更细致地分配，测试打包方式和正式打包不一样）
* eslint配置，整理代码 √
* 新增环境判断（dev、debug、debugmock、prod）√
* mock数据 √,模拟失败 √
* http封装（自定义错误、拦截请求。接口防重发）?
* 封装基础工具方法（引入lodash）√
* 单元测试 √
* normalize.css ×
* webpack配置文件夹别名 √
* 合并公共和私有（mock √, api √, store √, empty.vue）
* 子路由demo（如果异步加载组件的话，分离的组件chunk会识别为common chunk。从而于common-vendor.js一起打包到了dist/common文件夹下了。暂时不考虑异步组件） √
* vue.config.js 分环境配置 √
* 撸规范、helloworld页面（包括接口调用）
* 初始化脚本
* 定义项目配置
* 自动化测试

## bug log

### 单元测试报错

执行单元测试报：Super expression must either be null or a function

解决办法：[https://forum.vuejs.org/t/need-help-unit-testing-using-mocha/40583/3](https://forum.vuejs.org/t/need-help-unit-testing-using-mocha/40583/3)

### 关于vue.config.js里的pages.chunks的理解

pages对象会转变为html-webpack-plugin里的配置

pages.chunks即html-webpack-plugin的chunks参数[https://segmentfault.com/a/1190000007294861#articleHeader9](https://segmentfault.com/a/1190000007294861#articleHeader9)

[https://segmentfault.com/q/1010000016925412](https://segmentfault.com/q/1010000016925412)

### 单元测试只测试部分测试文件

	vue-cli-service test:unit tests/**/*.spec.js

后面的`tests/**/*.spec.js`是匹配测试文件的聚合
