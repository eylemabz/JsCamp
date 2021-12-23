//While Döngüsü

let i=0;
while(i<10){ //i değerini arttırmazsak sonsuz döngü olur.
  console.log(i);
  i++;
}

let k=10;
while(k>0){
  console.log(k);
  k--;
}

//Break & Continue
//Break döngüyü kırar

let x=0;
while(x<10){
  console.log(x);
  if(x==5){
    break;
  }
  x++;
}

//Continue kullanılan herden itibaren döngüyü kontrol etmeyi bırakır tekrar başa dönüp kontrole başlar continue den sonraki kısım kontrol edilmez.

let y=0;
while(y<10){ // 3 durumuna gelince döngü başa dönecek i artmıyor ama döngü devam ediyor y 3 olarak yani sonsu döngüye girer.
  if(y==3||y==5){
    y++;// bu şekilde 3 te takılıp sonsuz döngüye girme durumunu engelliyoruz.
    continue;
  }
  console.log(y);
  y++;
}

//Do-While Döngüleri
// Koşul sağlanmazsa bile bir defa çalışır 

let a=0;

do{
  console.log(a);
  a++;

}while(a<10);

//For Döngüleri

const langs=["Python","Javascript","Java"];

// let index=0;
// while(index<langs.length){
//   console.log(langs[index]);
//   index++;
// }

for(let index=0;index<langs.length;index++){
  console.log(langs[index]);
}

//Foreach Metodu

langs.forEach(function(lang,index){
  console.log(lang,index);
});

// Map fonksiyonu

const users=[
   {name:"Eylem",age:26},
   {name:"Gülay",age:40},
   {name:"Pınar",age:15}
];

const names=users.map(function(user){
  return user.name;
})
const ages=users.map(function(user){
  return user.age;
})
console.log(names);
console.log(ages);

//For in döngüsü

const user={
  name:"mustafa",
  age:26
};

for(let key in user){
  console.log(key,user[key]);
}