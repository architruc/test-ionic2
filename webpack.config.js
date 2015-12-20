var path = require('path');
var paths = require('./ionic.config').paths;

var srcAbs = path.join(__dirname, paths.srcDir);

module.exports = {
	entry: [
		'es6-shim/es6-shim',
		'reflect-metadata',
		'ionic-framework/js/web-animations.min',
		//'zone.js', // bug: angular beta 0 throws an error, so we import browser version instead (workaround)
		// http://stackoverflow.com/questions/34359303/zone-is-not-defined-for-ngzone-angular22-0-0-beta-0
		'zone.js/dist/zone',
		path.join(srcAbs, paths.appDir, paths.appSrcModule)
	],
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
			{test: /\.html$/, loader: "html-loader"},
		]
	},
	resolve: {
		//alias: {
			//'ionic': 'ionic-framework',
			//'web-animations.min': 'ionic-framework/js/web-animations.min',
		//},
		extensions: ["", ".js", ".ts"]
	}
};
