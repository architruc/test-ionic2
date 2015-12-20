var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;


var myStepDefinitionsWrapper = function () {

	this.Given(/^I open the application$/, function (/*callback*/) {
		//return this.visit('http://localhost:8100/');
		return browser.get('http://localhost:9001');
		//callback();
		//callback.pending();
	});

	this.Then(/^I should be on the first tab$/, function (callback) {
		callback.pending();
	});

	this.Then(/^The default events are displayed$/, function (callback) {
		callback.pending();
	});
};
module.exports = myStepDefinitionsWrapper;
