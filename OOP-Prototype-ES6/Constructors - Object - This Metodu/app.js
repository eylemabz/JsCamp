//console.log(this); //Global Scope 


/*
const emp1={ //Object Literal
  name:"Eylem",
  age:25,
  showInfos:function(){console.log("Bilgiler Gösteriyor");}
};

const emp2={
  name:"Eylem",
  age:29
};

emp1.salary=4000;
emp1.showInfos();

console.log(emp1);
*/

/* //çok mantıklı bir yöntem değil
function Employee(){ //yapıcı Fonksiyon - Constructor
  this.name="Eylem";

}

const emp1=new Employee(); //Employee den bir tane obje oluşturduk
const emp2=new Employee();
console.log(emp1);
console.log(emp2);
*/

function Employee(name,age,salary){
  this.name=name;
  this.age=age;
  this.salary=salary;

  this.showwInfos=function(){
    console.log(this.name,this.age,this.salary);
  }

  console.log(this);
}


const emp1=new Employee("Eylem",25,5000);
const emp2=new Employee("Eylem",30,4000);
emp1.showwInfos();
emp2.showwInfos();