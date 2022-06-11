<?php include 'main.php'; ?>

<h1 class="header-text">Get Outdoors. Explore.</h1>
</header>
<section class="container content-section">
    <h2 class="section-header">Camping</h2>
    <div class="shop-items">
        <div class="shop-item">
            <span class="shop-item-title">Tent</span>
            <img class="shop-item-image" src="">
            <div class="shop-item-details">
                <span class="shop-item-price">$12.99</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
        <div class="shop-item">
            <span class="shop-item-title">Hammock</span>
            <img class="shop-item-image">
            <div class="shop-item-details">
                <span class="shop-item-price">$14.99</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
        <div class="shop-item">
            <span class="shop-item-title">Sleeping bag</span>
            <img class="shop-item-image" ">
            <div class=" shop-item-details">
            <span class="shop-item-price">$9.99</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Water bottle</span>
        <img class="shop-item-image">
        <div class="shop-item-details">
            <span class="shop-item-price">$19.99</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>
    </div>
</section>
<section class="container content-section">
    <h2 class="section-header">MERCH</h2>
    <div class="shop-items">
        <div class="shop-item">
            <span class="shop-item-title">T-Shirt</span>
            <img class="shop-item-image">
            <div class="shop-item-details">
                <span class="shop-item-price">$19.99</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
        <div class="shop-item">
            <span class="shop-item-title">Coffee Cup</span>
            <img class="shop-item-image">
            <div class="shop-item-details">
                <span class="shop-item-price">$6.99</span>
                <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
    </div>
</section>
<section class="container content-section">
    <h2 class="section-header">CART</h2>
    <div class="cart-row">
        <span class="cart-item cart-header cart-column">ITEM</span>
        <span class="cart-price cart-header cart-column">PRICE</span>
        <span class="cart-quantity cart-header cart-column">QUANTITY</span>
    </div>
    <div class="cart-items">
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="" width="100" height="100">
                <span class="cart-item-title">T-Shirt</span>
            </div>
            <span class="cart-price cart-column">$19.99</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="" width="100" height="100">
                <span class="cart-item-title">Album 3</span>
            </div>
            <span class="cart-price cart-column">$9.99</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="2">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>
    </div>
    <div class="cart-total">
        <strong class="cart-total-title">Total</strong>
        <span class="cart-total-price">$39.97</span>
    </div>
    <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
</section>

<?php include 'footer.php'; ?>

</body>

</html>