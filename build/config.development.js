const path = require('path');

module.exports = {
	baseUrl: '/',
	businessArray: [
		{ chunk: 'evaluate', chunkName: '风险评估' }
	],
	plugins: [

	],
	lintOnSave: true,
	productionSourceMap: true,
	cssExtra: false,
	alias: {
		'@common': path.resolve('src/common/modules')
	}
};
