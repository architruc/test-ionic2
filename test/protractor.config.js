exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	//specs: ['todo-spec.js']


	//specs:
	
	// set to "custom" instead of cucumber.
	//framework: 'custom',
    //
	//// path relative to the current config file
	////frameworkPath: 'protractor-cucumber-framework',
	//frameworkPath: require.resolve('protractor-cucumber-framework'),
    //
    //
	//// relevant cucumber command line options
	//cucumberOpts: {
	//	format: "summary"
	//}





	baseUrl: 'http://localhost:9001',

	directConnect: true,
	//seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	specs: [
		'features/*.feature'
	],
	capabilities: {
		'browserName': 'chrome'
		//browserName: 'phantomjs',
		//'phantomjs.binary.path': './node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs',
		//'phantomjs.cli.args': '--debug=true --webdriver --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG',
		//version: '',
		//platform: 'ANY'
	},
	cucumberOpts: {
		require: 'features/step_definitions/**/*.js',
		//format: 'pretty'
		format: "summary"
	}
};
