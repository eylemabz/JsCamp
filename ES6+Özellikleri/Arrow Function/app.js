// const merhaba=function(){
//   console.log("Merhaba")
// }
// merhaba();

//Diğer Yöntem -- Arrow Function
const merhaba=()=>{
  console.log("Merhaba");
}
merhaba();


const merhaba1=firstName=>console.log("Merhaba",firstName);
merhaba1("Eylem");

//Normal fonksiyon
// const cube=function(x){
//   return x*x*x;
// }
// console.log(cube(4));


//Arrow  Function ile daha kısa yazma 
const cube=x=> x*x*x ; // return kullanmadan bu şekilde yazılabilir
console.log(cube(4));