System.config({
	packages: {
		'.': {
			defaultExtension: 'js',
			// use meta configuration to reference which modules
			// should use the plugin loader
			meta: {
				'*.html': {
					loader: 'text'
				}
			}
		},
		'..': {
			defaultExtension: 'js'
		}
	},
	paths: {
		'ionic-framework/*': '../node_modules/ionic-framework/*',
		'angular2/*': '../node_modules/angular2/*',
		'rxjs/*': '../node_modules/rxjs/*'
	},
	map: {
		text: './vendor/text.js'
	}
});
