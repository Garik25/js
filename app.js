"use strict";

const DM ={
  
    count:  0  ,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
  
  
 start(){

    this.count =parseInt( prompt("Այսօր քանի ֆիլմ եք դիտել?",));
    
    while( this.count === "" || this.count=== 0 || isNaN(this.count)){
      this.count = prompt("Այսօր քանի ֆիլմ եք դիտել?",)
    }
  },
    
status(){

  if (this.count <=3)
  {
    console.log("դասական ֆիլմ դիտող ա")
  } else if (this.count <=6)
  {
    console.log("շատ եք սիրում ֆիլմ դիտել")
  }  else{
    console.log("կինեի մեռածա ")
  }

  },

 rememberMyfilms(){

  for( let i=1; i<3; i++){ 
    let whichFilm =prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", );
    while(whichFilm==="" ||   whichFilm === null  ){
      whichFilm =prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", );
    }  
    let REteFilm  = +prompt(`Ինչքա՞ն եք գնահատում այդ <<${ whichFilm  }>>` );
       while(REteFilm  === "" ||  REteFilm === 0  || isNaN(REteFilm)){
        REteFilm  = prompt(`Ինչքա՞ն եք գնահատում այդ <<${whichFilm  }>>`, );
       } 
    this.movies[ whichFilm] =  REteFilm;
  }  
}   ,

favorit(){
  for(let i=1; i<3; i++){
   this.geners =prompt(`Ձեր նախընտրած ${i===1 ? i+"ին" : i+"րդ"}  ժանրը`)
    while(this.geners==="" ||   this.geners === null  ){
      this.geners
      
      =prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", );
    }  
    this.genres[i]=this.geners
  };

},
block(){
  if(this.privat=false){
    console.log("page tvaylnere")
  }


}
}
DM.start();
DM.status();
DM.rememberMyfilms();
DM.favorit()
DM.block()