const path = require('path');
const VConsolePlugin = require('vconsole-webpack-plugin');

module.exports = {
	baseUrl: '../../',
	businessArray: [	// 要打包的业务
		{ chunk: 'evaluate', chunkName: '风险评估' }
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
	}
};
