var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//loop through all items inside cart
for (var i = 0; i <removeCartItemButtons.length; i++){
    //which element loop we are in
    var button = removeCartItemButtons [i]
    button.addEventListener('click', function(event){
        //select cart row. which is parent of parent
        var buttonClicked = event.target.parentElement.parentElement.remove()
    })
}