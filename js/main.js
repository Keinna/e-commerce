let products = document.getElementById('products')

//update amount in cart nav + get data || nothing if there is no data
let shoppingCartAmount = JSON.parse(localStorage.getItem("data")) || [];

//arrow function
let generateProducts = () =>{
    //map wil target 1 by 1
    return (products.innerHTML = productItemsData.map((x) => {
        let{id, name, price, desc, img} = x
        //if you can find something than store. If not return empty arry
        let searchAmount = shoppingCartAmount.find((x) => x.id === id) || []
        return`
        <div id=product-id${id} class="product">
                    <img class="product-img" src="${img}" alt="">
                    <div class="product-desc">
                        <span class="product-brand">Brand</span>
                        <h5 class="product-name">${name}</h5>
                        <p class="product-text">${desc}</p>
                        <div class="product-price-cart-wrapper">
                            <h4 class="product-price">$ ${price}</h4>
                            <div class="product-amount-wrapper">
                                <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                                <div id=${id} class="product-amount">
                                ${searchAmount.item === undefined ? 0 : searchAmount.item}</div>
                                <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>`
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. Nog returning an empty string.
    }).join(""));
}

generateProducts();

let increment = (id) =>{
    let selectedItem = id;
    let checkAmountinCart = shoppingCartAmount.find((x) => x.id === selectedItem.id);

    if(checkAmountinCart === undefined ){
        shoppingCartAmount.push({
            id: selectedItem.id,
            item: 1,
        });
    }else{
        checkAmountinCart.item += 1;
    }

    update(selectedItem.id);
      //set data inside localstorage
      localStorage.setItem("data", JSON.stringify(shoppingCartAmount))
}

let decrement = (id) =>{
    let selectedItem = id;
    let checkAmountinCart = shoppingCartAmount.find((x) => x.id === selectedItem.id);
    //fix error when cart is empty. Everytime when search is undefind. stop
    if (checkAmountinCart === undefined) return
    // don't go below 0. Stop statement.
    else if(checkAmountinCart.item === 0 ){
        return;
    }
    else{
        checkAmountinCart.item -= 1;
    }
   
 //keep a good the on the order!!!!
    update(selectedItem.id)
       //target all objects. Check item. Select all objects that dont have 0. Set data back to cart
       shoppingCartAmount = shoppingCartAmount.filter((x) => x.item !== 0);
     //set data inside localstorage
     localStorage.setItem("data", JSON.stringify(shoppingCartAmount))
}

let update = (id) => {
    let amount = shoppingCartAmount.find((x) => x.id === id);
    document.getElementById(id).innerHTML = amount.item;
    //only trigger when updates
    calculateItemsCart()
};

let calculateItemsCart = () => {
 let cartItemsBadge = document.getElementById('cart-amount');
 //only item for calc number. x=previous and y =next number. 0 =default
//  The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step
 cartItemsBadge.innerHTML = shoppingCartAmount.map((x) => x.item).reduce((x,y) => x + y, 0);
}

// everytime app loads function will run
calculateItemsCart();



