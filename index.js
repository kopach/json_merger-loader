const path = require('path');
const json_merger = require('json_merger');

module.exports = function(source) {
	const callback = this.async();

	if (this.cacheable) {
		this.cacheable();
	}

	const jsObject = JSON.parse(source);
	const scope = this.options.context;

	const compiledObj = json_merger.fromObject(jsObject, {
		scope
	});

	const result =  JSON.stringify(compiledObj);

	callback(null, result);
};
