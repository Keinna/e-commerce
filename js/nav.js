const navSlide = () => {
    const burger = document.querySelector('.mobile-burger')
    const nav = document.querySelector('.nav-items')
    const navItems = document.querySelectorAll('.nav-items li')
    //toggle nav
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

            //animate items. Need index for delay animation (0.3 is initial delay)
    navItems.forEach((link,index) =>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
    })
    //burger animation
    burger.classList.toggle('toggle')
    })
}

navSlide();