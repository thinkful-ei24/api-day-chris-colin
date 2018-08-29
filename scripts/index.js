/* global shoppingList, api, store */
'use strict';

$(document).ready(function() {
  api.getItems((items)=> {
    items.forEach(item => {
      store.addItem(item);
    });
    shoppingList.render();
  });
  
  shoppingList.bindEventListeners();
});



