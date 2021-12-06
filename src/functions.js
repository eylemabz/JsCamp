function addToCard(quantity,productName="elma "){
    console.log("Sepete Eklendi=> ürün:"+productName+"adet: "+quantity)
}

//addToCard()
addToCard(10)
//addToCard(15)

let sayHello=()=>{
    console.log("hello World!")
}

sayHello()

let sayHello2=function(){
    console.log("Hello world 2")
}

sayHello2();

let product1={productName:"Elma",unitPrice:10,quantity:5}

function addToCart(product){
    console.log("Ürün: "+product.productName)
    console.log("Fiyat: "+product.unitPrice)
    console.log("Adet: "+product.quantity)
}

addToCart(product1)


let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}

product2=product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCart2(products){
      console.log(products)
}

let products =[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart2(products)

function add(...numbers){//fonk içinde değişkenin önüne 3 noktaya rest operatörü diyoruz
    let total=0;
    for(let i=0;i<numbers.length;i++){
        total=total+numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20,30,50)
add(20,30,40,50)

let numbers=[30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadolusehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
//console.log(icAnadolu.name)
//console.log(marmara.name)
console.log(icAnadolusehirleri)

let newproductName,newunitPrice,newquantity
({productName:newproductName,unitPrice:newunitPrice,quantity:newquantity}={ productName:"Elma",unitPrice:10,quantity:5})

console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)