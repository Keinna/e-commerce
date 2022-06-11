<?php include 'main.php'; ?>

<h1 class="header-text">Shop.</h1>
</header>
<section class="container content-section">
    <h2 class="section-header">Camping Gear</h2>
    <div class="shop-items">
        <div class="shop-item">
            <span class="shop-item-title">Tent</span>
            <img class="shop-item-image" src="img/tent.jpg">
            <div class="shop-item-details">
                <span class="shop-item-price">$199.99</span>
                <button class="btn  shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
        <div class="shop-item">
            <span class="shop-item-title">Hammock</span>
            <img class="shop-item-image" src="img/hammock.jpg">
            <div class="shop-item-details">
                <span class="shop-item-price">$39.99</span>
                <button class="btn  shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
        <div class="shop-item">
            <span class="shop-item-title">Sleeping bag</span>
            <img class="shop-item-image" src="img/sleeping-bag.jpg">
            <div class=" shop-item-details">
                <span class="shop-item-price">$9.99</span>
                <button class="btn shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
        <div class="shop-item">
            <span class="shop-item-title">Cooking gear</span>
            <img class="shop-item-image" src="img/cooking.jpg">
            <div class="shop-item-details">
                <span class="shop-item-price">$19.99</span>
                <button class="btn shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
    </div>
</section>
<section class="container content-section">
    <h2 class="section-header">MERCH</h2>
    <div class="shop-items">
        <div class="shop-item">
            <span class="shop-item-title">Backpack</span>
            <img class="shop-item-image" src="img/backpack.jpg">
            <div class="shop-item-details">
                <span class="shop-item-price">$79.99</span>
                <button class="btn shop-item-button" type="button">ADD TO CART</button>
            </div>
        </div>
        <div class="shop-item">
            <span class="shop-item-title">Coffee Cup</span>
            <img class="shop-item-image" src="img/header-photo.jpg">
            <div class="shop-item-details">
                <span class="shop-item-price">$6.99</span>
                <button class="btn shop-item-button" type="button">ADD TO CART</button>
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
        <!-- will be filled by js -->
    </div>
    <div class="cart-total">
        <strong class="cart-total-title">Total</strong>
        <span class="cart-total-price">$0</span>
    </div>
    <button class="btn btn-purchase" type="button">PURCHASE</button>
</section>

<?php include 'footer.php'; ?>

</body>

</html>