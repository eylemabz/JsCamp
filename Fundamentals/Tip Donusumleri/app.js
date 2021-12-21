let value;

//Veri Tiplerini Stringe Çevirme

value=String(123);
value=String(3.14);
value=String(true);
value=String(false);
value=String(function(){console.log()});
value=String([1,2,3,4,5]);

value=(10).toString();
value=(3.14).toString();


//Veri tiperini sayılara çevirme

value=Number("123");
value=Number(null);
value=Number(undefined);//NaN hatası alırız Not a Number
value=Number("HelloWorld");//NaN hatası alırız
value=Number(function(){console.log()});//NaN hatası alırız.
value=Number([1,2,3,4]);//NaN hatası alır.


value=number("3.245");
value=parseFloat("3.14");
value=parseInt("23");

//-----------------------------------


const a="Hello"+34;
console.log(a);
console.log(typeof a);


console.log(value);
console.log(typeof value);
