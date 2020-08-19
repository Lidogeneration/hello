'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promoAdv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    promoInteractiveList = document.querySelector('.promo__interactive-list');

promoAdv.forEach( i => {
    i.remove();
});

promoGenre.textContent = 'ДРАМА';

promoBg.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat; background-position: top;';

promoInteractiveList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((key, i) => {
    promoInteractiveList.innerHTML += 
    `<li class="promo__interactive-item">${i + 1} ${key}
        <div class="delete"></div>
    </li>`;
});