//check if document is still loading
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

//code for hooking up buttons will already work even if page is not loaded. It will wait for this event
function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    //loop through all items inside cart
    for (var i = 0; i < removeCartItemButtons.length; i++){
        //which element loop we are in
        var button = removeCartItemButtons [i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function removeCartItem(event){
   //select cart row. which is parent of parent
   var buttonClicked = event.target
   buttonClicked.parentElement.parentElement.remove()
   //runs all the code when its called
   updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    //check if there is a number or it is not a negative number
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}


function updateCartTotal(){
    //only want 1 so select first element.
    var cartItemContainer  = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        //remove dollarsign and make text a number
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    //round to nearest full number
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total
    
}

