
class Math{
  sqrt(x){
    console.log(x*x);
  }

  static cube(x){ //Obje oluşturmadan kullanabiliriz. Statik metodlarımız bulunduğu classın prototipine yazılmıyor
    console.log(x*x*x);
  }

}
const math=new Math();
Math.cube(5);
math.sqrt(2);

//-----------------------------------------------------------------

//Object.create(); // create static bir metod
//Math.sqrt(); // sqrt static bit metod