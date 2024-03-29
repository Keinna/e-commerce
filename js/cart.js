let label = document.getElementById('label')
let shoppingCart = document.getElementById("shoppingCart");
let shoppingCartAmount = JSON.parse(localStorage.getItem("data")) || [];

let calculateItemsCart = () => {
    let cartItemsBadge = document.getElementById("cart-amount");
    cartItemsBadge.innerHTML = shoppingCartAmount
        .map((x) => x.item)
        .reduce((x, y) => x + y, 0);
};

calculateItemsCart();

let generateCartItems = () => {
    if (shoppingCartAmount.length !== 0) {
        return (shoppingCart.innerHTML = shoppingCartAmount
            .map((x) => {
                let { id, item } = x;
                let search = productItemsData.find((y) => y.id === id) || [];
                return `
            <div class="cart-item">
                <img class="cart-img" src=${search.img}>
                <div class="cart-details">
                    <div class="cart-price-x">
                        <h4 class="cart-title-price">
                        <p>${search.name}</p>
                        <p class="cart-price">$ ${search.price}</p>

                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-square"></i>
                    </div>

                    <div class="product-amount-wrapper">
                        <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                            <div id=${id} class="product-amount">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                    </div>

                    <h3>
                    $ ${item * search.price}
                    </h3>
                </div>
            </div>
            `;
            })
            .join(""));
    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2 class="section-title">Cart is empty</h2>
        <p class="section-sub-title italic-text">- Please put something in your cart to purchase -</p>
        <div class="button-empty-card">
        <a href="/index.html" class="btn">Go to shop</a>
        </div>
        `;
    }
};

generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let checkAmountinCart = shoppingCartAmount.find(
        (x) => x.id === selectedItem.id,
    );

    if (checkAmountinCart === undefined) {
        shoppingCartAmount.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        checkAmountinCart.item += 1;
    }
    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(shoppingCartAmount));
};

let decrement = (id) => {
    let selectedItem = id;
    let checkAmountinCart = shoppingCartAmount.find(
        (x) => x.id === selectedItem.id,
    );
    if (checkAmountinCart === undefined) return;
    else if (checkAmountinCart.item === 0) {
        return;
    } else {
        checkAmountinCart.item -= 1;
    }

    update(selectedItem.id);
    shoppingCartAmount = shoppingCartAmount.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(shoppingCartAmount));
};

let update = (id) => {
    let amount = shoppingCartAmount.find((x) => x.id === id);
    document.getElementById(id).innerHTML = amount.item;
    calculateItemsCart();
    totalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
    shoppingCartAmount = shoppingCartAmount.filter(
        (x) => x.id !== selectedItem.id,
    );
    generateCartItems();
    totalAmount();
    calculateItemsCart();
    localStorage.setItem("data", JSON.stringify(shoppingCartAmount));
};

let clearCart = () =>{
    shoppingCartAmount = []
    generateCartItems();
    calculateItemsCart()
    localStorage.setItem("data", JSON.stringify(shoppingCartAmount))

}

let totalAmount = ()=>{
    if(shoppingCartAmount !== 0){
        let amount = shoppingCartAmount.map((x) =>{
            let {item, id} = x;
            let search = productItemsData.find((y) => y.id === id) || [];
            return item * search.price
        }).reduce((x,y)=> x + y, 0);
        label.innerHTML = `
        <h2>Total price:$ ${amount}</h2>
        <div class="btn-cart-wrapper">
        <button onclick="clearCart()" class="btn btn-delete">Clear cart</button>
        <button class="btn" onclick="purchaseAlert()">Purchase</button>
        </div>
        `
    }else return
}

function purchaseAlert () {
    alert('Sorry, this is not a real shop. You did not purchase anything.')
}

totalAmount();