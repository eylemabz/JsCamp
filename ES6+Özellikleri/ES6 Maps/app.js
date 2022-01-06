//Maapler - Key(anahtar) - Value(değer)

let myMap=new Map(); //Oluşturma

console.log(myMap);

const key1="Eylem";
const key2={a:10,b:20};
const key3=()=>2;

//Set Metodu --  Map e eklemek için
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");

//Get Metodu -- Key e karşılık gelen değeri almak için
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);


//Map Boyutu
console.log(myMap.size);

//----------------------------------------------------------

const cities=new Map();
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

//ForEach
cities.forEach(function(value,key){
  console.log(key,value);
})


//For Of
for(let [key,value] of cities){ //Destructing yapısı var
  console.log(key,value);
}

//Map Keys sadece keys alacaz
for(let key of cities.keys()){
  console.log(key);
}

//Map Values sadece değerleri alacaz
for(let value of cities.values()){
  console.log(value);
}

// array den map yapma
const array=[["key1","value1"],["key2","value2"]];
const lastMap=new Map(array);

console.log(lastMap);


//Mapten array oluşturma
const citiess=new Map();

citiess.set("Ankara",5);
citiess.set("İstanbul",15);
citiess.set("İzmir",4);

const array1=Array.from(citiess);
//[["Ankara",5]["İstanbul",15]["İzmir",4]]
console.log(array1);
