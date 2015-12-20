var path = require('path');
var webpack = require('webpack');
var paths = require('./ionic.config').paths;

var srcAbs = path.join(__dirname, paths.srcDir);
var isProduction = process.env.NODE_ENV === 'production';

// Example of config with dev server:
// http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

var config = {
	entry: {
		libs: [
			'es6-shim/es6-shim',
			'reflect-metadata',
			'ionic-framework/js/web-animations.min',
			//'zone.js', // bug: angular beta 0 throws an error, so we import browser version instead (workaround)
			// http://stackoverflow.com/questions/34359303/zone-is-not-defined-for-ngzone-angular22-0-0-beta-0
			'zone.js/dist/zone',
			'ionic-framework/ionic'
		],
		app: path.join(srcAbs, paths.appDir, paths.appSrcModule)
	},
	output: {
		path: path.join(__dirname, paths.wwwDir, paths.buildDir, paths.buildJSDir),
		filename: paths.appBuildBundle,
		publicPath: path.join(paths.buildDir, paths.buildJSDir),
		pathinfo: false // show module paths in the bundle, handy for debugging
	},
	module: {
		loaders: [
			{test: /\.ts$/, loader: 'awesome-typescript', include: [srcAbs], exclude: /node_modules/},
			{test: /\.ts$/, loader: 'strip-sourcemap', include: /node_modules\/angular2/},
			{test: /\.jpg$/, loader: "file-loader"},
			{test: /\.png$/, loader: "url-loader?mimetype=image/png"},
			{test: /\.html$/, loader: "html-loader?minimize=false"}
		]
	},
	resolve: {
		//alias: {
		//'ionic': 'ionic-framework',
		//'web-animations.min': 'ionic-framework/js/web-animations.min',
		//},
		extensions: ["", ".ts", ".js"]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"libs", /* filename= */"libs.bundle.js")
	]
};


if (isProduction) {
	// Minify when building for production
	config.plugins = config.plugins.concat([
		//https://github.com/mishoo/UglifyJS2
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
			output: {comments: false},
			"screw-ie8": true,
			screwIe8: true,
			compress: {
				sequences: true,
				dead_code: true,
				drop_debugger: true,
				conditionals: true,
				comparisons: true,
				booleans: true,
				unused: true,
				if_return: true,
				join_vars: true,
				drop_console: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	]);
}

module.exports = config;
