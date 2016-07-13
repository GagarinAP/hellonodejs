var module = require('./../module/module.js');

module.exports = (function () {

	var displayAll = function () {
		return module.displayAll();
	};
	var displayId = function () {
		return module.displayId();
	};
	
	return {
		displayAll: displayAll,
		displayId: displayId
	};

})();