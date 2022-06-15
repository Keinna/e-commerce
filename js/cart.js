var label = document.getElementById('label')
var checkoutCart = document.getElementById('checkoutCart')

//update amount in cart nav + get data || nothing if there is no data
var shoppingCartAmount = JSON.parse(localStorage.getItem("data")) || [];

var calculateItemsCart = () => {
    var cartItemsBadge = document.getElementById('cart-amount');
    //only item for calc number. x=previous and y =next number. 0 =default
   //  The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step
    cartItemsBadge.innerHTML = shoppingCartAmount.map((x) => x.item).reduce((x,y) => x + y, 0);
   }
   
   // everytime app loads function will run
   calculateItemsCart();

  
   