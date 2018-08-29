/* global shoppingList, api, store */
'use strict';

$(document).ready(function() {
  api.getItems((items)=> {
    items.forEach(item => {
      store.addItem(item);
    });
    //test code
    const item = store.items[0];
	console.log('current name: ' + item.name);
	store.findAndUpdate(item.id, { name: 'qwe' });
	console.log('new name: ' + item.name);
	//end test code
  });
  
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems((items) => {
  const item = items[0];

  api.updateItem(item.id, { checked:true }, () => {
    console.log('updated!');
  });
});


