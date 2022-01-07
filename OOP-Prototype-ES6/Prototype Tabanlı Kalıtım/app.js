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


console.log(emp);