"use strict"

let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', 0);

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false    
};

for (let i = 1; i <=2; i++) {
    let lastFilm = prompt('Один из последних просмотренных фильмов?', 'Не помню');
    let filmMark = prompt('На сколько оцените его?', '5');
    personalMovieDB.movies[lastFilm] = filmMark;
}

console.log(personalMovieDB);