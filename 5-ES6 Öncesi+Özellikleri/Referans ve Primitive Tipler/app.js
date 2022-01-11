//Primitive Tip Boyutu
let a="Eylem";
let b="Eylem";

if(a===b){
  console.log("Eşit")
}

//Referans Tİp Boyutu
let array1=[1,2,3,4,5];
let array2=[1,2,3,4,5];

if(array1===array2){ // array1 ve array2 bellekte aynı adresi tutuyorlar mı diye sorguluyoruz.eferanslar (bellekteki adresler) kıyaslanıyor.
  console.log("Eşit");
}


const cities=new Map();
const key=[1,2,3];
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set(key,"array");

console.log(cities.get(key));
