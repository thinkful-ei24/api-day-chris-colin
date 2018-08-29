const api = (function() {

	const BASE_URL = 'https://thinkful-list-api.herokuapp.com/colin-chris';

	const getItems = function (callback) {			
		$.getJSON(`${BASE_URL}/items`, callback);
		};
	
	const createItem = function (name, callback) {

	}

	return {
		getItems,
		createItem
	};

}());