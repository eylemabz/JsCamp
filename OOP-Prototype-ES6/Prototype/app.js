// const object=new Object() //Object Literal
// object.name="Eylem";
// console.log(object);

//Prototype - 1
/*
function Employee(name,age){ //Constructor
  this.name=name;
  this.age=age;
  this.showInfos=function(){
    console.log("Bilgiler Gösteriliyor");
  }
  this.toString=function(){
    console.log("Bu bir Employee Objesi");
  }
}

const emp1=new Employee("Eylem",27);
console.log(emp1);

console.log(emp1.toString());
*/
//--------------------------------------------------------------------

//Prototype -2


function Employee(name,age){ //Constructor
  this.name=name;
  this.age=age;
}

Employee.prototype.showInfos=function(){ //Her objede kullanılıyor bu şekilde bir kere yazılıp defalarca kullanımış olacak.Belleği yormadan
  console.log("İsim: " +this.name+ " Yaş: "+this.age);
}

const emp1=new Employee("Eylem",27);
const emp2=new Employee("Eylem",40);

emp2.showInfos();


console.log(emp1);
console.log(emp2);
