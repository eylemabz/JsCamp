/*
//1 - Event Objesi Kullanma

const filterInput=document.getElementById("filter");
const todoForm=document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
  console.log("Submit eventi");
   
  e.preventDefault(); //Sayfanın yenilenmesini önlüyoruz.
}

// filterInput.onfocus=function(){
//   console.log("Naber");
// }

/*filterInput.addEventListener("focus",function(e){
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.placeholder);
  console.log(e.target.className);
  console.log("Naber");
})

*/

/*
//2 - Keyboard Evenetleri

//klavye eventleri

const header=document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);
function changeText(e){
  header.textContent=e.target.value;
  console.log(e.key);
  console.log(e.target);
  console.log(e.target.value);
}

//keypress
document.addEventListener("keypress",run);
function run(e){
  console.log(e.which);// Bastığımız tuşun ASCII değerini göterir.
  console.log/(e.key);//Bastığımız tuşu gösterir.
  console.log("Naber");

}

//keydown
document.addEventListener("keydown",run);
function run(e){
  console.log(e.which);// Bastığımız tuşun ASCII değerini göterir.
  console.log/(e.key);//Bastığımız tuşu gösterir.
  console.log("Naber");

}

//keyup
document.addEventListener("keyup",run);
function run(e){
  console.log(e.which);// Bastığımız tuşun ASCII değerini göterir.
  console.log/(e.key);//Bastığımız tuşu gösterir.
  console.log("Naber");

}
*/

/*
//3 - Mouse Eventleri

const cardBoddy=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#tasks-title");

//Click Event
title.addEventListener("click",run);

function run(e){
  console.log(e.type);
}

//Double Click
title.addEventListener("dblclick",run);

function run(e){
  console.log(e.type);
}

//Mouse Down Event
title.addEventListener("mousedown",run);

function run(e){
  console.log(e.type);
}

//Mouse Up Event
title.addEventListener("mouseup",run);

function run(e){
  console.log(e.type);
}

//Mouse over Event
title.addEventListener("mouseover",run);

function run(e){
  console.log(e.type);
}

//Mouse out Event
title.addEventListener("mouseout",run);

function run(e){
  console.log(e.type);
}


//Mouse enter Event
title.addEventListener("mouseenter",run);
title.addEventListener("mouseleave",run);

function run(e){
  console.log(e.type);
}
*/


//4 - Input Eventleri

/*
const filter=document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);
// function load(e){
//   console.log("Sayfa Yüklendi");
// }

//Focus
filter.addEventListener("focus",run);
filter.addEventListener("blur",run);

function run(e){
  console.log(e.type);
}

//Cut-Copy-Paste
filter.addEventListener("copy",run);
filter.addEventListener("cut",run);
filter.addEventListener("paste",run);

function run(e){
  console.log(e.type);
}

//Select
filter.addEventListener("select",run);

function run(e){
  console.log(e.type);
}
*/

//5 - Event Capturing & Bubbling

//Event Bubbling
document.querySelector(".container").addEventListener("click",function(){
  console.log("Div Container");
});

document.querySelector(".card.row").addEventListener("click",function(){
  console.log("Card Row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
  console.log("Card Body");
});

//Event Capturing || Delegation
const cardbody=document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click",run);
function run(e){
  if (e.target.className==="fa fa-remove"){
    console.log("Silme İşlemi");
  }
  if(e.target.id==="filter"){
    console.log("Filtreleme İşlemi");
  }
  if(e.target.id==="clear-todos"){
    console.log("Tüm taskları silme işlemi");
  }
  console.log("Naber");
}
