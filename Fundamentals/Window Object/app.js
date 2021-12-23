// Alert

alert("Merhaba");

const cevap=confirm("Emin misiniz");
console.log(cevap);

if(cevap){
  console.log("Silin Gitsin");
}
else{
  console.log("Silmeyin");
}

const a=prompt("2+2=?");

console.log(a);
console.log(typeof a);

if(a==4){
  console.log("Doğru");
}
else{
  console.log("Yanlış");
}

let value;

value=window;
value=window.location;
value=window.location.host;
value=window.location.hostname;
value=window.location.port;
value=window.location.href;

if(confirm("Sayfa yenilensin mi?")){
  window.location.reload();
}
else{
  console.log("sayfa yenilenemedi");
}


value= window.outerHeight;
value= window.outerWidth;


value= window.innerHeight;
value= window.innerWidth;

value=window.scrollX;
value=window.scrollY;

console.log(value);
