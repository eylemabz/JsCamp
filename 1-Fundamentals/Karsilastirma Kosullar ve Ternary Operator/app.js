//Karşılaştırma Operatörleri 

// ==  iki değerin eşitliğini kontrol ediyor
// ===  tip kontrolude yapılıyor
/* != */
/* !== */
// >
// <
// >=
// <=

console.log(2==2);
console.log("js"=="java");
console.log(2=="2"); //burada 2 string olarak alınır o yüzden true oluyor.

console.log(2==="2"); // burada hem değerler eşit mi diye kontrol ediliyor hem tipler aynı mı diye kontrol ediliyor o yüzden false oluyor.

console.log(2<3);
console.log(2>3);

console.log(2<=3);
console.log(2>=3);

console.log(2!=3);

//Mantıksal Bağlaçlar
//1-Not Operatörü

console.log(!(2==2));

//2-And Operatörü

console.log((2==2) && ("ahmet"=="ahmet"));

//3-Or Operatörü

console.log((2==2) || ("ahmet"=="ahmet"));

//Koşullar

const error=true;

if(error==true){
  console.log("hata oluştu");
}


const user="mmc";

if(user==="mmc"){
  console.log("kullanıcı bulundu");
}
else{
  console.log("kullanıcı bulunamadı ...");
}


const process="1";

if(process==="1"){
  console.log("işlem 1");
}
else if(process==="2"){
  console.log("işlem 2");
}
else if(process==="3"){
  console.log("işlem 3");
}
else if(process==="4"){
  console.log("işlem 4");
}
else{
  console.log("Geçeriz işlem...");
}

//Ternary Operatör

const number=100;
console.log(number===100? "Sayı 100":"Sayı 100 değil");
