//Var
/*
var name="Eylem";
console.log(name);

name="Pınar";
console.log(name);
*/

//Let
/*
let a,b;
a=10;
b=5;
console.log(a+b);
*/



//Const

const name="Eylem";
console.log(name);
name="Pınar"; //const değer değişmez
console.log(name);
 //-------------------------------------

 const a; //hata alır çünkü değer atamasını burada yapmamız gerekir.
 a=10;
 console.log(a);

 //--------------------------------------

 const a=[1,2,3,4,5];
 console.log(a);
 a=[1,2,3,4,5,6]; // bu sayılmaz yani burada değer ataması yapamayız.
 a.push(6);//bu şekilde değer ekleyebiliriz a nnın referans ettiği yerin değerini değiştiriyoruz.
 console.log(a);
