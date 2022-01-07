//ES6 Öncesi
/*
function Person(name,age){
  this.name=name;
  this.age=age;
}

Person.prototype.showInfos=function(){
  console.log("İsim: "+this.name+" Yaş: "+this.age);
}

// const person=new Person("Eylem",28);

// console.log(person);

function Employee(name,age,salary){
  // this.name=name;
  // this.age=age;
  Person.call(this,name,age);
  this.salary=salary;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.toString=function(){
  console.log("Employee");
}

//Override İşlemi
Employee.prototype.showInfos=function(){
  console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary); 
}

const emp=new Employee("Eylem",25,5000);
console.log(emp);
emp.showInfos();
//console.log(emp.toString());
emp.toString();
*/

//------------------------------------------------------------------------------

class Person{ //SuperClass ya da BaseClass
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  showInfos(){
    console.log("İsim: "+this.name+" Yaş: "+this.age);
  }
}

class Employee extends Person{ //DerivedClass yada SubClass ya da ChildClass
  constructor(name,age,salary){
    // this.name=name;
    // this.age=age;
    super(name,age); //Personun constructorını şu an kullanıyoruz 
    this.salary=salary;
  }
  
  //Override İşlemi
  showInfos(){
    console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
  }
  toString(){
    console.log("Employee");
  }
  //Ektra 
  raiseSalary(amount){
    this.salary += amount;
  }
}

const emp=new Employee("Eylem",26,5000);
emp.raiseSalary(400);
console.log(emp);
emp.showInfos();
emp.toString();


