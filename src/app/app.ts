import {App, Platform} from 'ionic-framework/ionic';
import {Page1} from './page1/page1';
import {Page2} from './page2/page2';
import {Page3} from './page3/page3';


@App({
	template: require('./app.html')
})
export class MyApp {

	private tab1Root:Page1;
	private tab2Root:Page2;
	private tab3Root:Page3;

	constructor(platform:Platform) {

		// this tells the tabs component which Pages
		// should be each tab's root Page
		this.tab1Root = Page1;
		this.tab2Root = Page2;
		this.tab3Root = Page3;

		platform.ready().then(() => {
			// Do any necessary cordova or native calls here now that the platform is ready
		});
	}
}
