"use strict";


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