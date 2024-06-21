// aside links section

let active = document.querySelector('.activeSelection');
let active1 = document.querySelector('.activeSelection1');
let aside = document.querySelector('.asideList');
let aside1 = document.querySelector('.asideList1');
let icon0 = document.querySelector('.icon0');
let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let icon3 = document.querySelector('.icon3');


active.addEventListener('click', () => {
    aside.classList.toggle('hideSidelist');
    icon0.classList.toggle('hideSidelist');
    icon1.classList.toggle('hideSidelist');
});
active1.addEventListener('click', () => {
    aside1.classList.toggle('hideSidelist');
    icon2.classList.toggle('hideSidelist');
    icon3.classList.toggle('hideSidelist');
});


// mobile hamburger menu open and close

let menuOpen = document.querySelector('.menuOpen');
let menuClose = document.querySelector('.menuClose');
let navigate = document.querySelector('.navigator');
let mobileSearch = document.querySelector('.mobileSearch');
let searchBar = document.querySelector('.searchBar')
let bxClose = document.querySelector('.bx-x');

function openCloseMenu() {
    menuOpen.classList.toggle('hide');
    menuClose.classList.toggle('hide');
    navigate.classList.toggle('hide');
    mobileSearch.classList.toggle('hide');
}

function searchBox() {
    searchBar.classList.toggle('hide');
    mobileSearch.classList.toggle('hide');
    menuOpen.classList.toggle('hide');
    menuClose.classList.toggle('hide');
    bxClose.classList.toggle('bxLeft');
}