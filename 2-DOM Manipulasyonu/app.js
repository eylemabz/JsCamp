//Window Object

let value;

value=document;
value=document.all;
value=document.all.length;
value=document.all[0];
value=document.all[6];
value=document.all[document.all.length-1];


const elements=document.all;//Html collection
for(let i=0;i<elements.length;i++){
   console.log(elements[i]);
}

// elements.forEach(function(element) { //Html collection üzerinde foreach uygulayamayız onu bir array e dönüştürmemiz lazım. 
//    console.log(element);
// });

const collections=Array.from(document.all); //array e dönüştürme
collections.forEach(function(collection) { 
  console.log(collection);
});


value= document.all[8];
value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;
value=document.location.port;

value=document.URL;

value=document.characterSet;

console.log(value);


//------------------------------------------------------------------------------

let value1;
value1=document;
 
//Scriptler

value1=document.scripts;
value1=document.scripts.length;
value1=document.scripts[0];

//Linkler

value1=document.links;
value1=document.links[0];
value1=document.links[document.links.length-1];
value1=document.links[document.links.length-1].getAttribute("class");
value1=document.links[document.links.length-1].getAttribute("href");
value1=document.links[document.links.length-1].className;
value1=document.links[document.links.length-1].classList;

//Formlar

value1=document.forms;
value1=document.forms.length;
value1=document.forms[0];
value1=document.forms["form"];
value1=document.forms[0].id;
value1=document.forms[0].getAttribute("id");
value1=document.form[0].name;
value1=document.forms[0].getAttribute("name");
value1=document.forms[0].method;



console.log(value1);

//Element Id'e Göre Seçme


let element;


element=document.getElementById("todo-form");
element=document.getElementById("tasks-title");

//Element Class'a Göre Seçme

element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("card-header");

//Element Tag'e Göre Seçme

element=document.getElementsByTagName("li");
element=document.getElementsByTagName("div");

//Query Selector -- Css Selector -- Tek eleman alır

element=document.querySelector("#todo-form");//# id ye göre
element=document.querySelector("#tasks-title");
element=document.querySelector(".list-group-item");//. class a göre
element=document.querySelector("li");

//querySelectorAll - Tüm Elementleri Seç

element=document.querySelectorAll(".list-group-item"); //Node List
element.forEach(function(el){
  console.log(el);
});

console.log(element);

//Element Seçme ve Style Özelliklerini Değiştirme

const eleman=document.querySelector("#clear-todos");

//Element Özellikleri

console.log(eleman.id);
console.log(eleman.className);
console.log(eleman.classList);
console.log(eleman.classList[1]);
console.log(eleman.textContent);
console.log(eleman.innerHTML);
console.log(eleman.href);
console.log(eleman.style);

//Style ve Element Özelliklerini değiştirme


eleman.className="btn btn-primary";
eleman.style.color="#000";
eleman.style.marginLeft="50px";
eleman.href="https://www.google.com.tr";
eleman.target="_blank";


eleman.textContent="Silin";
//eleman.textContent="<span>Silin</span>";
eleman.innerHTML="<span style='color:pink'>Silin</span>"



const elemann=document.querySelectorAll(".list-group-item");//Node List
elemann.forEach(function(el){
  el.style.color="red";
  el.style.background="#eee";
});

console.log(eleman);


let eleman2=document.querySelector("li:last-child");
eleman2=document.querySelector("li:nth-child(2)");
eleman2=document.querySelector("li:nth-child(4)");
eleman2=document.querySelectorAll("li:nth-child(odd)");
eleman2=document.querySelectorAll("li:nth-child(even)");

console.log(eleman2);

//Dom Elementleri Üzerinde Gezinme

let a;
const todoList=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");

a=todoList;
a=todo;
a=cardrow;

//Child Nodes

a=todoList.childNodes;
a=todoList.childNodes[0];

//Children özelliği -- Element alıyor

a=todoList.children;
a=todoList.children[0];
a=todoList.children[2].textContent="Değişti";


a=cardrow;
a=cardrow.children;
a=cardrow.children[2].children[1].textContent="Burası Değişti";


a=todoList;
a=todoList.children[0];
a=todoList.firstElementChild;
a=todoList.lastElementChild;
a=todoList.children.length;
a=todoList.childElementCount;


a=cardrow;
a=cardrow.parentElement;
a=cardrow.parentElement.parentElement.parentElement;

//Element Kardeşleri Bulma

a=todo;
a=todo.previousElementSibling;
a=todo.nextElementSibling;
a=todo.nextElementSibling.nextElementSibling;
a=todo.previousElementSibling.previousElementSibling;//Null

console.log(a);

///Dinamik Olarak Eleman Ekleme


//Yeni Element Oluşturma

const newLink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];
newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="HTTps://www.google.com.tr";
newLink.target="_blank";


/*
// text content

//cardbody.textContent="hdghvjfsd";

//text Node
const text=document.createTextNode("Naber");
cardbody.appendChild(text);//Appendchild en sona eleman ekler
*/

newLink.appendChild(document.createTextNode("Farklı sayfaya git"));
cardbody.appendChild(newLink);

console.log(newLink);

//Dinamik Element Silme

const ToDoList= document.querySelector("ul.list-group");
const todos=document.querySelectorAll("li.list-group-item");

//Remove Metodu
todos[0].remove();

//Remove Child Metodu

ToDoList.removeChild(ToDoList.lastElementChild);

/*ToDoList.removeChild(todos[3]);*/


console.log(todos);
console.log(ToDoList);


//REPLACE - Elementleri Değiştirme

//Yeni element
const cardBody=document.querySelectorAll(".card-body")[1];
const newElement=document.createElement("h3");

newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="Yeni Todolar";

//Eski element
const oldElement=document.querySelector("#tasks-title");

//Değiştirme
cardBody.replaceChild(newElement,oldElement);

console.log(newElement);


//Dinamik Attribute Değiştirme - Silme - Ekleme

const todoInput=document.getElementById("todo");
let x;

x=todoInput;
x=todoInput.className;

/* todoInput.className="form-control newClass"; */

todoInput.classList.add("newClass");
todoInput.classList.add("newClass");
todoInput.classList.remove("form-control");

x=todoInput;
x=todoInput.placeholder;
x=todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");

x=todoInput;
x=todoInput.hasAttribute("name");


console.log(x);