/* global shoppingList, api, store */
'use strict';

$(document).ready(function() {
  api.getItems((items)=> {
    items.forEach(item => {
      store.addItem(item);
      shoppingList.render();
    });
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
