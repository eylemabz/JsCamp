
//Değişken oluşturma 
/*
var a=20;
var b=10;
var c=50;

console.log(a,b,c)
*/

//---Primitive----
/*
var a=10; //number veri tipi
var b=3.14; //number veri tipi
console.log(typeof a);
console.log(typeof b);
*/

//String
/*
var name="Eylem";
console.log(name);
console.log(typeof name);
*/

//Boolean
/*
var a=true;
console.log(typeof a);
*/

//Null
/*
var  a=null;
console.log(a);
console.log(typeof a);
*/

//Undefine
/*
var a;
console.log(a);
*/

//-------Referance veri tipleri -----

//Array
/*
var numbers=[1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0]);
*/

//Object
/*
var person={
  name:"Eylem",
  age:26
}
console.log(person);
console.log(typeof person);
*/

//NOT: Javascriptte object olarak görünen tüm veri tipleri referans veri tipleridir.

//Date object
/*
var date=new Date();
console.log(date);
console.log(typeof date);
*/
 
//Function
/*
var merhaba=function{
  console.log("merhaba");
}
console.log(merhaba);
console.log(typeof merhaba);
*/

//Primitive veri tipine örnek
/*
var a=10;
var b=a;
console.log(a,b);
b=20;
console.log(a,b);
*/

//Referance veri tipine örnek
var a=[1,2,3];

var b=a;
a.push(4);
console.log(b);
