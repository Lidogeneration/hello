'use strict';

window.addEventListener('DOMContentLoaded', () =>{

  const tabs = document.querySelectorAll('.tabheader__item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');
  
  const hideTabContent = (arrayHide, arraActiveRemove) => {
    arrayHide.forEach(key => {
      key.style.display = 'none';
    });
    
    arraActiveRemove.forEach(key => {
      key.classList.remove('tabheader__item_active');
    });
  };

  const showTabContent = (arrayShow,arraActiveAdd,i = 0) => {
    arrayShow[i].style.display = 'block';
    arraActiveAdd[i].classList.add('tabheader__item_active');
  };

  hideTabContent(tabContent,tabs);
  showTabContent(tabContent,tabs);

  tabsParent.addEventListener('click', e => {
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((key, i) => {
        if (target == key) {
          hideTabContent(tabContent,tabs);
          showTabContent(tabContent,tabs,i);
        }
      });
    }
  });
});


// Рекурсивный setTimeout
// let id = setTimeout(function log (){
//   console.log('hello');
//   id = setTimeout(log, 500);
// },500);