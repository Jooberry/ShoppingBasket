var assert = require('assert');
var ShoppingBasket = require('../shopping_basket.js');
var Item = require('../item.js');

beforeEach(function(){
  shoppingBasket = new ShoppingBasket();
  // item = new Item("grapes", 5, true);
});

describe('Shopping Basket', function(){

  it('can add item', function(){
    shoppingBasket.addItem(item);
    assert.equal(1, shoppingBasket.countItems());
  });

  it('can remove item', function(){
    shoppingBasket.addItem(item);
    // shoppingBasket.addItem(item);
    shoppingBasket.removeItem(item);
    assert.equal(0, shoppingBasket.countItems());
  });

  // it('can total item costs', function(){
  //   shoppingBasket.addItem(item);
  //   assert.equal(1, shoppingBasket.totalBasketContents());
  // })

});