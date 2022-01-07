let num1,num2;

arr=[100,200,300,400];

// num1=arr[0];
// num2=arr[1];


// Destructing
[num1,num2]=arr; //num1 0. indexe num2 1. indexe eşitleniyor.

console.log(num1,num2);


//Object Destructing
const numbers={
  a:10,
  b:20,
  c:30,
  d:40,
  e:50
};

const {a,b,c}=numbers;
console.log(a,b,c);


//Function Destructing
const getLangs=()=>["Python","Java","C++"];
const [lang1,lang2,lang3]=getLangs();
console.log(lang1,lang2,lang3);


//Obje
const person={
  name:"Eylem",
  year:1995,
  salary:5000,
  showInfo:()=>console.log("Bilgiler Gösteriliyor")
}
const {name:isim,year:yil,salary:maas,showInfo:bilgileriGoster}=person;
console.log(isim,yil,maas);
bilgileriGoster();
