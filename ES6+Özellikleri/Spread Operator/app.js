//Spread  Operator

const langs=["Python","Java","C++"];

// console.log(langs[0],langs[1],langs[2]);
console.log(...langs); //Spread operatör kullanım

//---------------------------------------------------------------------

//const langs2=["Javascript","C",langs[0],langs[1],langs[2]];
const langs2=["Javascript","C",...langs];
console.log(langs2)

//---------------------------------------------------------------------

const number=[1,2,3,4,5,6,7,8,9];
//const[a,b]=number;
const[a,b,...number2]=number; // 1 2 dışında kalan değerler number2 arrayıne yazıldı
console.log(a,b);
console.log(number2);

//---------------------------------------------------------------------

const addNumbers=(a,b,c)=>console.log(a+b+c);
const numbers=[100,200,300];

//addNumbers(numbers[0],numbers[1],numbers[2]);
addNumbers(...numbers);