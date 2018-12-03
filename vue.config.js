const path = require('path');
const config = require(`./build/config.${process.env.NODE_ENV}`);

let pages = {};

config.businessArray && config.businessArray.forEach(v => {
	pages[v.chunk] = {
		// page 的入口
		entry: `src/business/${v.chunk}/index.js`,
		// 模板来源
		template: 'public/index.html',
		// 在 dist/index.html 的输出
		filename: `business/${v.chunk}/index.html`,
		// 当使用 title 选项时，
		// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
		title: v.chunkName
	};
});

// 直接修改webpack配置，不需要return
let configureWebpack = webpackConfig => {
	// 配置别名
	config.alias && Object.keys(config.alias).forEach(v => {
		webpackConfig.resolve.alias[v] = config.alias[v];
	});

	// 合并plugins
	webpackConfig.plugins = webpackConfig.plugins.concat(config.plugins || []);

	// webpackConfig.output.chunkFilename = 'business/[name]/[name].[contenthash:8].js';
	// 修改打包的业务js文件，放到入口下
	webpackConfig.output.filename = 'business/[name]/[name].[hash:8].js';

	// 全局注入less变量、mixins
	let lessLoaders = webpackConfig.module.rules.find(v => {
		return v.test.toString().includes('.less');
	});

	lessLoaders.oneOf.map(v => {
		v.use.push({
			loader: 'style-resources-loader',
			options: {
				patterns: [
					path.resolve(__dirname, 'src/assets/styles/vars.less'),
					path.resolve(__dirname, 'src/assets/styles/mixins.less')
				]
			}
		});
	});

};

module.exports = {
	baseUrl: config.baseUrl,
	pages,
	assetsDir: config.assetsDir || 'common',
	lintOnSave: config.lintOnSave, // 是否需要eslint
	productionSourceMap: config.productionSourceMap, // 是否需要sourcemap
	configureWebpack,
	css: {
		// 作用于ExtractTextWebpackPlugin。修改css输出路径
		extract: config.cssExtra
	}
};


