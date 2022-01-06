const person={
  name:"Eylem",
  age:25,
  salary:4000
};

const langs=["Python","Java","C++","PHP"];
const name="Eylem";

//For In
for(let prop in person){
  console.log(prop,person[prop]);
}

for(let index in langs){
  console.log(index,langs[index])
}

for(let index in name){
  console.log(index,name[index]);
}

//For Of
//For Of döngüsüyle objeler üzerinde gezemiyoruz sadece array e benzer veri tipleri üzerinde gezebiliriz
for(let value of langs){
  console.log(value);
}

for(let character of name){
  console.log(character);
}
