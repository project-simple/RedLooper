const path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		app: './src/RedLooper.js'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist'
	}
};
