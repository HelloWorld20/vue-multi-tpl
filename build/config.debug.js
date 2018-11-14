const path = require('path');
const VConsolePlugin = require('vconsole-webpack-plugin');

const chunk = 'evaluate';
const chunkName = '风险评估'

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
		'@common': path.resolve('src/common/modules')
	},
	assetsDir: `business/${chunk}`
};
