"use strict";


  let numberOfFilms = prompt("Այսօր քանի ֆիլմ եք դիտել?",);
  if ( numberOfFilms  <=3)
  {
    console.log("դասական ֆիլմ դիտող ա")

  } else if ( numberOfFilms  <=6)
  {
    console.log("շատ եք սիրում ֆիլմ դիտել")

  }  else{
    console.log("կինեի մեռածա ")

  }  while( numberOfFilms === "" || numberOfFilms=== 0 || isNaN(numberOfFilms)){
    numberOfFilms = prompt("Այսօր քանի ֆիլմ եք դիտել?",)
  }

const personalMovieDB = {
  count: isNaN(numberOfFilms) ? 0 : numberOfFilms ,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}
for( let i=0; i<numberOfFilms; i++){ 
  let whichFilm =prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", );
  while(whichFilm==="" ||   whichFilm === null  ){
    whichFilm =prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", );
  }  
  let REteFilm  = +prompt(`Ինչքա՞ն եք գնահատում այդ <<${ whichFilm  }>>` );
     while(REteFilm  === "" ||  REteFilm === 0  || isNaN(REteFilm)){
      REteFilm  = prompt(`Ինչքա՞ն եք գնահատում այդ <<${whichFilm  }>>`, );
     } 
  personalMovieDB.movies[ whichFilm] =  REteFilm;
}   
      if(personalMovieDB.privat===false){
        console.log("տվյալների բազան փակ ա")
      }else{            
        console.log(personalMovieDB);
      }

 