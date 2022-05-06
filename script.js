"use strict";



//  Responsive Menue
const hamburgerBtn = document.querySelector('.responsive-menu__label');
const checkboxBtn = document.querySelector('.responsive-menu__checkbox');
const overlayEl = document.querySelector('.overlay');
const bodyEl = document.querySelector('body');


hamburgerBtn.addEventListener('click', () => {
    overlayEl.classList.toggle('hidden');
    bodyEl.classList.toggle('no-scroll');
});


overlayEl.addEventListener('click', function () {
    checkboxBtn.click();
    bodyEl.classList.toggle('no-scroll');
    overlayEl.classList.add('hidden')

});





//  Popular Item tabs
const popularTabList = document.querySelectorAll('.popular__tab-item');
const popularContentList = document.querySelectorAll('.popular__content-list');


popularTabList.forEach( (item, index) => {
    item.addEventListener('click', function(){

        popularTabList.forEach( item => {
            item.classList.remove('popular__tab-item--active');
        });

        popularContentList.forEach(item => {
            item.classList.remove('popular__content-list--active');
        });

        item.classList.add('popular__tab-item--active');
        popularContentList[index].classList.add('popular__content-list--active');

    });
});


