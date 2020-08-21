'use strict';

document.addEventListener('DOMContentLoaded', () =>{

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
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('form.add'),
        addingInput = formAdd.querySelector('.adding__input'),
        checkbox = formAdd.querySelector('input[type=checkbox]');
    
    const deleteAdv = (item) =>{
        item.forEach( i => {
            i.remove();
        });
    };

    const makeCanges = () => {
        promoGenre.textContent = 'ДРАМА';
    
        promoBg.style.cssText = 'background-image: url("img/bg.jpg");';
    };

    formAdd.addEventListener('submit', (e) => {

        e.preventDefault();
        let inputValue = addingInput.value;
        const favorite = checkbox.checked;

        if(inputValue) {
            if(inputValue > 21) {
                inputValue = `${inputValue.substring(0, 22)}...`;
            }
            movieDB.movies.push(inputValue);
            sortArr(movieDB.movies);
    
            filmList(movieDB.movies, promoInteractiveList);
        }

        e.target.reset();
        if(favorite) {
            console.log('Добавляем любимый фильм');
        }
    });
    
    const sortArr = (array) => {
        array.sort();
    };
    
    const filmList = (films, parent) => {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((key, i) => {
            parent.innerHTML += 
            `<li class="promo__interactive-item">${i + 1} ${key}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((key, i) =>{
            key.addEventListener('click', () => {
                key.parentElement.remove();
                movieDB.movies.splice(i, 1);
                filmList(films, parent);
            });
        });
    };
    


    deleteAdv(promoAdv);
    makeCanges();
    filmList(movieDB.movies, promoInteractiveList);
});