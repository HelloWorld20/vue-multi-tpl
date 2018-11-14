const path = require('path');

module.exports = {
	baseUrl: '../../',
	businessArray: [
		{ chunk: 'note', chunkName: '短信通知服务' },
		{ chunk: 'evaluate', chunkName: '风险评估' }
	],
	plugins: [

	],
	lintOnSave: false,
	productionSourceMap: false,
	cssExtra: {
		filename: 'business/[name]/[name].[contenthash:8].css'
	},
	alias: {
		'@common': path.resolve('src/common/modules')
	}
};
