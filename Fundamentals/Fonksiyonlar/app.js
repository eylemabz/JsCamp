//Fonksiyon tanımlama

function merhaba(name="Bilgi Yok",age="Bilgi Yok"){
  // if(typeof name==="undefined")name="Bilgi Yok";
  // if(typeof age ==="undefined")age="Bilgi Yok";
  console.log(`İsim:${name} Yas:${age}`);
}

merhaba("eylem",26);

merhaba();

function square(x){
  return x*x;
}
function cube(x){
  return x*x*x;
}
// let a=square(12);

// a=cube(a);

let a=cube(square(12));

console.log(a);


//Function Expression

const hello=function(name){
  console.log("Hello "+name);
}

hello("Eylem");


//Immediately Invoked Function Expression (IIEF) -- Tanımlandığı yerde çalışan fonksiyonlar

(function(name){
  console.log("Merhaba: "+name);
})("Eylem");


const database={
  host:"localhost",
  add:function(){
    console.log("Eklendi.");
  },
  get:function(){
    console.log("Elde Edildi.");
  },
  update:function(id){
    console.log(`Id: ${id} Güncellendi`);
  },
  delete:function(id){
    console.log(`Id: ${id} Silindi`);
  }
}
 console.log(database.host);
 database.add();
 database.delete(10);