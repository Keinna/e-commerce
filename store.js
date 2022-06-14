// //check if document is still loading
// if(document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded', ready)
// } else{
//     ready()
// }

// //code for hooking up buttons will already work even if page is not loaded. It will wait for this event
// function ready(){
//     var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//     //loop through all items inside cart
//     for (var i = 0; i < removeCartItemButtons.length; i++){
//         //which element loop we are in
//         var button = removeCartItemButtons [i]
//         button.addEventListener('click', removeCartItem)
//     }

//     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//     for (var i = 0; i < quantityInputs.length; i++){
//         var input = quantityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }

//     var addToCartButtons = document.getElementsByClassName('shop-item-button')
//     for (var i = 0; i < addToCartButtons.length; i++){
//         var button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }

//     document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
// }

// //alert buyer and remove everything from cart
// function purchaseClicked(event) {
//     alert ('Thank you for your purchase')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     //are there any children in this cart item?
//     while (cartItems.hasChildNodes()){
//         //remove child and use first child, while continue to loop till empty
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     updateCartTotal()
// }

// function removeCartItem(event){
//    //select cart row. which is parent of parent
//    var buttonClicked = event.target
//    buttonClicked.parentElement.parentElement.remove()
//    //runs all the code when its called
//    updateCartTotal()
// }

// function quantityChanged(event){
//     var input = event.target
//     //check if there is a number or it is not a negative number
//     if(isNaN(input.value) || input.value <= 0){
//         input.value = 1
//     }
//     updateCartTotal()
// }

// function addToCartClicked(event){
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }

// function addItemToCart(title, price, imageSrc){
//     //create a row
//     var cartRow = document.createElement('div')
//     //style new row
//     cartRow.classList.add('cart-row')
//     //add row to cart items
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     //check for names so you can't add double
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (var i = 0; i < cartItemNames.length; i++){
//         if(cartItemNames[i].innerText == title){
//             alert('This item is already in your cart')
//             return
//         }
//     }
//     //make content div
//     var cartRowContents = `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//             <span class="cart-price cart-column">${price}</span>
//             <div class="cart-quantity cart-column">
//                 <input class="cart-quantity-input" type="number" value="1">
//                 <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>
//     ` 
//     cartRow.innerHTML = cartRowContents
//     //add cartrow to end of cart items
//     cartItems.append(cartRow)
//     //because create new div when you add item after document loaded, you have to add eventlistener here
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     //same for quantity
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

// }


// function updateCartTotal(){
//     //only want 1 so select first element.
//     var cartItemContainer  = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++){
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         //remove dollarsign and make text a number
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     //round to nearest full number
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total
    
// }

var products = document.getElementById('products')
var productsItemsData = [
    {
        id:"bla",
        name:'tent',
        price: 45,
        desc: "Lorem blabla",
        img: 'img/sleeping-bag.jpg'
    },
    {
        id:"bla2",
        name:'tent',
        price: 45,
        desc: "Lorem blabla",
        img: 'img/hammock.jpg'
    },
    {
        id:"bla3",
        name:'tenerfsdt',
        price: 40,
        desc: "Lorem blabla",
        img: 'img/sleeping-bag.jpg'
    },
]
//arrow function
var generateProducts =()=>{
    //map wil target 1 by 1
    return (products.innerHTML = productsItemsData.map((x) => {
        var{id, name, price, desc, img} = x
        return `
    
        <div class="product">
                    <img class="product-img" src="${img}" alt="">
                    <div class="product-desc">
                        <span class="product-brand">Brand</span>
                        <h5 class="product-name">${name}</h5>
                        <p class="product-text">${desc}</p>
                        <div class="product-price-cart-wrapper">
                            <h4 class="product-price">${price}</h4>
                            <div class="product-amount-wrapper">
                                <i class="bi bi-dash-circle"></i>
                                <div class="product-amount">0</div>
                                <i class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>`
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. Nog returning an empty string.
    }).join(""));
}

generateProducts();