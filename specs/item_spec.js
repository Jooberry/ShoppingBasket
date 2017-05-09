var assert = require('assert');
var Item = require('../item.js');

beforeEach(function(){
  item = new Item("beans", 1, false);
});

describe('Item', function(){

  it('has a name', function(){
    assert.equal("beans", item.name);
  });

  it('has a price', function(){
    assert.equal(1.00, item.price);
  });

  it('has a boolean', function(){
    assert.equal(false, item.bogof);
  });

});