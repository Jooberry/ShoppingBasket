var Item  = require('./item.js');

var ShoppingBasket = function(){
  this.basketContents = [];
};

ShoppingBasket.prototype = {
  addItem: function(item){
    this.basketContents.push(item);
  },
  removeItem: function(itemName){
    for (item of this.basketContents){
      if (itemName === item.name){
        var index = this.basketContents.indexOf(item);
        this.basketContents.splice(index, 1);
      }   
    }
    return (item.name);
  },
  countItems: function(){
    return this.basketContents.length;
  },
  totalBasketContents: function(){
    var total = 0;
    // for (key of Object.keys(this.basketContents)) {
    //   total += key[0].price;
    // }
    return Object.keys(basketContents);
  }
};


// shoppingBasket = new ShoppingBasket();
// item = new Item("dog food", 1, true);
// item2 = new Item("guns", 3, false);
// shoppingBasket.addItem(item);
// shoppingBasket.addItem(item2);

// console.log(shoppingBasket.basketContents);
module.exports = ShoppingBasket;