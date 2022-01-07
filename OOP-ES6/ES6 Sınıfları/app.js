//Syntactic Sugar 

//ES6 Öncessi
/*
function Employee(name,age,salary){
  this.name=name;
  this.age=age;
  this.salary=salary;
}

Employee.prototype.showInfos=function(){
  console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);

}

const emp=new Employee("Eylem",26,5000);
console.log(emp);
*/

//ES6 Sonrası
class Employee{

  constructor(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
  }

  showInfos(){
    console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
  }

}
const emp=new Employee("Eylem",30,5000);
console.log(emp);
emp.showInfos();