//Call

const obj1={
  num1:10,
  num2:20
};

const obj2={
  num1:30,
  num2:40
};

function addNumber(num3,num4){
  //console.log(this); //gloal scope gösteriyor içinde num1 ve num2 yok
  //console.log(this.num1); //undefined
  console.log(this.num1+this.num2+num3+num4);
}

//addNumber(100,200);

addNumber.call(obj1,100,200);
addNumber.call(obj2,100,200);

//------------------------------------------------------------------------

//Apply

addNumber.apply(obj1,[100,200]);
addNumber.apply(obj2,[100,200]);

//--------------------------------------------------------------------------

//Bind

function getNumberTotal(num3,num4){
  return this.num1+this.num2+num3+num4;
}

const copyFunc1=getNumberTotal.bind(obj1);
const copyFunc2=getNumberTotal.bind(obj2);

console.dir(copyFunc1);
console.dir(copyFunc2);

console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));