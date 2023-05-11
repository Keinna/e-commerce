let products = document.getElementById('products')

let shoppingCartAmount = JSON.parse(localStorage.getItem("data")) || [];

let generateProducts = () => {
    return (products.innerHTML = productItemsData
        .map((x) => {
            let { id, brand, name, price, desc, img } = x;
            let searchAmount =
                shoppingCartAmount.find((x) => x.id === id) || [];
            return `
        <div id="product-id${id}" class="product">
                    <img class="product-img" src="${img}" alt="product-img" loading="lazy">
                    <div class="product-desc">
                        <span class="product-brand">${brand}</span>
                        <h5 class="product-name">${name}</h5>
                        <p class="product-text">${desc}</p>
                        <div class="product-price-cart-wrapper">
                            <h4 class="product-price">$ ${price}</h4>
                            <div class="product-amount-wrapper">
                                <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                                <div id=${id} class="product-amount">
                                ${
                                    searchAmount.item === undefined
                                        ? 0
                                        : searchAmount.item
                                }</div>
                                <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>`;
        })
        .join(""));
};

generateProducts();

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
    localStorage.setItem("data", JSON.stringify(shoppingCartAmount));
};

let update = (id) => {
    let amount = shoppingCartAmount.find((x) => x.id === id);
    document.getElementById(id).innerHTML = amount.item;
    calculateItemsCart();
};

let calculateItemsCart = () => {
    let cartItemsBadge = document.getElementById("cart-amount");
    cartItemsBadge.innerHTML = shoppingCartAmount
        .map((x) => x.item)
        .reduce((x, y) => x + y, 0);
};


calculateItemsCart();



