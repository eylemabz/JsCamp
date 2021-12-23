//Global Scope

var value1=10;
let value2=20;
const value3=30;

function Func(){// değerler fonksiyona özgü
  var value1=40;
  let value2=50;
  const value3=60;
  console.log(value1,value2,value3);
}
Func();

if(true){
  var a=10; //blok dışındada var kullanılabiliyor
  let b=20; //block dışında kullanlımaz
  const c=30; //blok dışında kullanılamaz
  //console.log(a,b,c);
}
console.log(a);
console.log(b)
console.log(c)

console.log(value1,value2,value3);