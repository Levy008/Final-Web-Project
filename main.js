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
