module.exports = (function () {
	var data = [
		{
			"id": 1,
			"date": "2015-10-12 14:44:14",
			"worker": {
				"id": 1,
				"name": "worker"
			},			
			"key": {
				"id": 1,
				"apartment": {
					"id": 1,
					"number": 5
				},
				"customer": {
					"id": 1,
					"name": "customer"
				},
				"name": "my key"
			}			
		},
		{
			"id": 2,
			"date": "2015-14-12 14:44:14",
			"worker": {
				"id": 1,
				"name": "worker"
			},			
			"key": {
				"id": 1,
				"apartment": {
					"id": 1,
					"number": 5
				},
				"customer": {
					"id": 1,
					"name": "customer 1"
				},
				"name": "my key"
			}			
		},
		{
			"id": 3,
			"date": "2015-14-12 14:44:14",
			"worker": {
				"id": 1,
				"name": "worker"
			},			
			"key": {
				"id": 1,
				"apartment": {
					"id": 1,
					"number": 5
				},
				"customer": {
					"id": 1,
					"name": "Mary"
				},
				"name": "my key"
			}			
		}
	];
	
	var searchByCustomer = function (customerName) {		
		// All coll stuff find here
		var result = [];
		var expression = new RegExp("^" + customerName + "(.*)")
		for(var i = 0; i < data.length; ++i) {
			if(data[i].key.customer.name.search(expression) > -1) {
				result.push(data[i]);
			}
		}
		return result;
	};
	
	var searchByDate = function (date) {
		var result = [];
		for(var i = 0; i < data.length; ++i) {
			if(Date.parse(data[i].date) === Date.parse(date)) {
				result.push(data[i]);
			}
		}
		return result;
	};
	
	var getAll = function () {
		return data;
	};

	return {
		searchByCustomer: searchByCustomer,
		searchByDate: searchByDate,
		getAll: getAll
	};
})();