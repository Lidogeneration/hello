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


  ////modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = modal.querySelector('[data-close]');

    function openModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      clearInterval(modatTimerId);
    }

    modalTrigger.forEach(e => {
      e.addEventListener('click', openModal);
    });

    function closeModal() {
      modal.classList.remove('show');
      modal.classList.add('hide');
      document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', e => {
      if(e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if(e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });

    const modatTimerId = setTimeout(openModal, 15000);

    function showModalByScroll() {
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
        clearInterval(modatTimerId);
      }
    }

    window.addEventListener('scroll', showModalByScroll);

    //Card
    // const contCard = document.querySelector('#contCard');
    // class Card {
    //   constructor(img, title, text, price) {
    //     this.img = img;
    //     this.title = title;
    //     this.text = text;
    //     this.price = price;
    //   }
    // }

    // const cards = {
    //   card01: new Card('img/tabs/vegy.jpg', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '229'),
    //   card02: new Card('img/tabs/elite.jpg', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '550'),
    //   card03: new Card('img/tabs/post.jpg', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', '430')
    // };

    // const addCard = (obj) =>{
    //   const cardWrap = document.createElement('div');
    //   cardWrap.classList.add('menu__item');
    //   cardWrap.innerHTML = `<img src="${obj.img}" alt="${obj.title}">
    //                         <h3 class="menu__item-subtitle">${obj.title}</h3>
    //                         <div class="menu__item-descr">${obj.text}</div>
    //                         <div class="menu__item-divider"></div>
    //                         <div class="menu__item-price">
    //                             <div class="menu__item-cost">Цена:</div>
    //                             <div class="menu__item-total"><span>${obj.price}</span> грн/день</div>
    //                         </div>
    //                         `;
    //   contCard.append(cardWrap);
    // };
    // for(let i in cards) {
    //   console.log(typeof i);
    // }

    class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAN();
      }

      changeToUAN() {
        this.price = this.price * this.transfer;
        console.log(this.price);
      }

      render() {
        const element = document.createElement('div');
        element.innerHTML = `<div class="menu__item">
                          <img src=${this.src} alt=${this.alt}>
                          <h3 class="menu__item-subtitle">${this.title}</h3>
                            <div class="menu__item-descr">${this.descr}</div>
                            <div class="menu__item-divider"></div>
                            <div class="menu__item-price">
                                <div class="menu__item-cost">Цена:</div>
                                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                            </div>
                          </div>`;
        this.parent.append(element);
      }
    }

    new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container'
    ).render();

    new MenuCard(
      "img/tabs/elite.jpg",
      "elite",
      'Меню “Премиум”',
      'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      14,
      '.menu .container'
    ).render();

    new MenuCard(
      "img/tabs/post.jpg",
      "post",
      'Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      21,
      '.menu .container'
    ).render();
});