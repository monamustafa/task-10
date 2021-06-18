// import Darkmode from 'darkmode-js';

let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('#menu');
let closeMenu = document.querySelector('.close');
let showPart = document.querySelectorAll('.showPart')
let x = true;
let showMore = document.querySelector('.show-more');
let userEmail = document.querySelector('.userEmail');
let userName = document.querySelector('.userName');
let stickyNav = document.querySelector('.stickyNav');
let darkModee = document.querySelector('.darkModee');
let bodyStyle = document.querySelector('body');
// darkModee.addEventListener('click',function(){
//     bodyStyle.style.mixBlendMode='difference'
// })
// new Darkmode().showWidget();

// sticky navbar
let bodyScroll = document.querySelector('html,body');
window.addEventListener('scroll', function () {
    console.log(bodyScroll.scrollTop);
    if (bodyScroll.scrollTop > 90) {
        stickyNav.style.display = 'block '
    } else {
        stickyNav.style.display = 'none'
    }

})
//                          navbar section 
let doupleclick = false;
closeMenu.addEventListener('click', function () {
    menu.style.display = 'none';
})
menuIcon.addEventListener('click', function () {
    if (!doupleclick) {
        menu.style.display = 'block';
        doupleclick = true;
    } else {
        menu.style.display = 'none';
        doupleclick = false;

    }
})
showMore.addEventListener('click', function () {
    if (x) {
        showMore.innerHTML = "Show Less";
        x = false;
        for (let i = 0; i < showPart.length; i++) {
            showPart[i].style.display = 'block'
        }
    } else {
        x = true;
        showMore.innerHTML = "Show More"
        for (let i = 0; i < showPart.length; i++) {
            showPart[i].style.display = 'none'
        }
    }
})
// showMore.addEventListener('click', function () {
//     if (showMore.innerHTML == "Show More") {
//         showMore.innerHTML = "Show Less";
//         for (let i = 0; i < showPart.length; i++) {
//             showPart[i].style.display = 'block'
//         }
//     } else {
//         showMore.innerHTML = "Show More"
//         for (let i = 0; i < showPart.length; i++) {
//             showPart[i].style.display = 'none'
//         }
//     }
// })

// $(menuIcon).click(function () {
//     $(menu).toggle("lol");
// });
//                           Form 
userName.addEventListener('keyup', function () {
    userName.value = userName.value.toUpperCase();
})