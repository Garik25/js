for (let i=5 ; i<=10 ; ++i){
    console.log(i)
}

for(let i=20; i>=10 ;--i){
    console.log(i)
if(i===13){
    break;
}
}

for( let i=0 ; i<=40; i+=2){
    console.log(i) 

}
let i=1;
while(i <=3){
    console.log(i)
    i++
}


debugger;
let n = 3; 
let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n * 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
 
  string += "\n";
}

duconsole.log(string);