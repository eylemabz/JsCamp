const obj={
  test1:function(){
    console.log("Test 1");
  },
  test2:function(){
    console.log("Test 2");
  }
}

//console.log(obj);

const emp=Object.create(obj); // emp objem obj objemden kalıtım alır. Yani emp objesinin prototipi obj objesi oldu.

emp.name="Eylem";
emp.age=27;

console.log(emp);
console.log(emp.test1);

//----------------------------------------------------------------------

function Person(){ //Constructor

}

Person.prototype.test1=function(){
  console.log("Test 1");
}
 
Person.prototype.test2=function(){
  console.log("Test 2");
}

function Employe(name,age){ //Constructor
  this.name=name; 
  this.age=age;
}


Employe.prototype=Object.create(Person.prototype); //Employe prototipini Person Prototypetan oluşturdduk

Employe.prototype.myTest=function(){
  console.log("My Test");
}
const em=new Employe("Eylem",24);
em.test1();
console.log(em);