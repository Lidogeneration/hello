'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы смотрели ?', '');
    while ( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы смотрели ?', '');
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      alert('Просмотренно довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
      } else {
        alert('Произошла ошибка');
      }
  },
  writeYourGenres: () => {
    for(let i = 1; i < 2; i++) {
      let genres = prompt(`Введите данные через запятую`).toLowerCase();
      if(genres == '' || genres == null) {
        console.log(`Вы ввели некорректные данные`);
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((key, i) => {
      console.log(`Любимый жанр ${i + 1} это ${key}`);
    });
  },
  showMyDB: (hidden) => {
    if(!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log('DB hidden');
    }
  },
  toggleVisibleMyDB: () => {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);