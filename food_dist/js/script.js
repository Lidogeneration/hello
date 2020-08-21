'use strict';

window.addEventListener('DOMContentLoaded', () =>{

  // Tabs

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

  // Timer

  const deadLine = '2020-08-24';
  
  const getTimeRemaining = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
  };

  function getZero (num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.total <= 0) {
          clearInterval(timeInterval);
        }
    }
  };
  
  setClock('.timer', deadLine);
});