const path = require('path');
const VConsolePlugin = require('vconsole-webpack-plugin');

const chunk = 'demo';
const chunkName = 'HelloWorld'

module.exports = {
	baseUrl: '../../',
	businessArray: [	// 要打包的业务
		{ chunk, chunkName }
	],
	// 插件
	plugins: [
		new VConsolePlugin({
			enable: true
		})
	],
	lintOnSave: false,	// 是否启用eslint
	productionSourceMap: true,	// 是否启用sourcemap
	cssExtra: false,	// 是否抽离css
	// 别名配置
	alias: {
		'@common': path.resolve('src/common/lib')
	},
	assetsDir: `business/${chunk}`
};
