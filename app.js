"use strict";

const numberOfFilms = +prompt("Այսօր քանի ֆիլմ եք դիտել?");

const personalMovieDB = {
  count: isNaN(numberOfFilms) ? 0 : numberOfFilms ,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
}

const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", ),
      b = +prompt(`Ինչքա՞ն եք գնահատում այդ <<${a !== "" && a !== null ? a: "film1" }>> ֆիլմը`),
      c = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", ),
      d = +prompt(`Ինչքա՞ն եք գնահատում այդ <<${ c !== "" && c !== null ? c: "film2"}>> ֆիլմը`);
        
     
    

personalMovieDB.movies[a !== "" && a !== null ? a: "film1"] = b;
personalMovieDB.movies[c !== "" && c !== null ? c: "film2"] = d;
      if(personalMovieDB.privat===false){
        console.log("tuyl chenq tanis")
      }else{
        
        
        console.log(personalMovieDB);
      }

 