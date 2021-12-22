let value;

const programmer={
  name:"Eylem Abuzeyitoğlu",
  age:"26",
  email:"example@gmail.com",
  lang:["Python","Java","Javascript"],
  adress:{
    city:"Kütahya",
    street:"Dumlupınar"
  },

  work:function(){
    console.log("Programcı Çalışıyor...");
  }
}

value=programmer;

value=programmer.email;

value=programmer.lang;
value=programmer.adress.city;

programmer.work();


const programmers=[
  {name:"Eylem",age:26},
  {name:"Pınar",age:16}
]

value=programmers[0];
value=programmers[0].name;

console.log(value);