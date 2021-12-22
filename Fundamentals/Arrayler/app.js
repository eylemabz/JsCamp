let value;

const number=[33,45,67,32,59,90,5];
//const number2=new Array(1,2,3,4,5,6,7);

const langs=["Python","Java","C++","Jacascript"];

const a=["Merhaba",22,null,undefined,3.14];
//uzunluk
value=number.length;
//indexleme
value=number[0];
value=number[3];
value=number[number.length-1];// son eleman
//Herhangi bir indexdeki değeri değiştirme

number[2]=1000;
value=number;

//index Of

value=number.indexOf(1000);

//Array sonuna değer ekleme - Push

number.push(2000);
value=number;

//Array başına değer ekleme

number.unshift(3000);
value=number;

//Array sonundan değer atma -Pop
number.pop();
value=number;

//Array başından değer atma
number.shift();
value=number;

//Belli bir indexten belli bir indexe kadar atma

number.splice(0,3);
value=number;

//Array elemanları ters çevirmek için Reverse metodu
number.reverse();
value=number;

//Array sıralama için sort metodu
value=number.sort();// sort metodu sadece ilk rakamlara bakıp küçükten büyüğe sıralama yapıyor .

value=number.sort(function(x,y){
  //küçükten büyüğe sıralama 
  return x-y;
});

value=number.sort(function(x,y){
  //büyükten küçüğe doğru sıralama
  return y-x;
});

console.log(value);


