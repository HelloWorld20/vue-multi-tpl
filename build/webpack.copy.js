const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
	entry: path.resolve(__dirname, '../dist'),
	output: '../dist',
	plugins: [
		new CopyWebpackPlugin([
			{from: '../dist/common/js/about.*.js', to: '../dist/test'}
		])
	]
}

module.exports = config
