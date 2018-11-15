const path = require('path');

module.exports = {
	baseUrl: '/',
	businessArray: [
		{ chunk: 'demo', chunkName: 'HelloWorld' }
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
