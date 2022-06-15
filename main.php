<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <script src="js/data.js" async></script>
    <script src="js/store.js" async></script>
    <script src="js/cart.js" async></script>
    <title>E-commerce project</title>
</head>

<body>
    <header class="main-header">
        <nav class="nav main-nav">
            <a href="/"><img src="img/logo-white.png" alt="logo Outdoorsy" class="logo"></a>
            <ul class="nav-items">
                <li class="nav-item"><a class="active" href="index.php">HOME</a></li>
                <li class="nav-item"><a href="store.php">STORE</a></li>
                <li class="nav-item"><a href="about.php">ABOUT</a></li>
                <li class="nav-item ">
                    <a href="cart.php">
                        <div class="nav-cart">
                            <i class="bi bi-cart"></i>
                            <div class="cart-amount" id="cart-amount">0</div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>