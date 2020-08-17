'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы смотрели ?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних фильмов ?', ''),
      b = prompt('НА сколько его оцените ?', ''),
      c = prompt('Один из последних фильмов ?', ''),
      d = prompt('НА сколько его оцените ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

