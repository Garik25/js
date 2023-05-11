 "use string"
 class UserAbourt{
  constructor(name, fristname, age, city){
  this.name= name,
  this.fristname=fristname,
  this.age=age,
  this.city=city;
 }
  user=()=>{
   console.log(`My name ${ this.name} ${this.fristname}  i ${this.age} years age i'm from to ${this.city}`)
  }

 } 

 const user1= new   UserAbourt("Garik", "Darbinyan",17,"EVN")
user1.user()
console.log(user1)


const user2= new   UserAbourt("Areg", "Adamyan",20,"Lenagan")
user2.user()
console.log(user2)


