'use strict';

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы смотрели ?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы смотрели ?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms () {
  for ( let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов ?', ''),
          b = prompt('НА сколько его оцените ?', '');
    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      i--;
      console.log('error');
    }
  }
}

rememberMyFilms();


function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  
}

detectPersonalLevel();


let writeYourGenres = () => {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером = ${i}`);
  }
};

writeYourGenres();

let showMyDB = (hidden) => {
  if(!hidden) {
    console.log(personalMovieDB);
  }
};

showMyDB(personalMovieDB.privat);

