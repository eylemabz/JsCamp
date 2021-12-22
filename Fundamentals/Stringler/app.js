let value;

const firstName="Eylem";
const lastName="Eylem";

const lang="Java,C#,C++";

value=firstName+lastName;
value=firstName+" "+lastName;

value=firstName.length;

value=firstName.concat(" ",lastName," ","Caz");

value=firstName.toLowerCase();
value=firstName.toUpperCase();

value=firstName[4];


//Indexof 

value=firstName.indexOf("E");
value=firstName.indexOf("m");

//Char At

value=firstName.charAt(0);

//Split

value=lang.split(" ");

//Replace

value=lang.replace("C#","C");

//Include

value=lang.includes("C#");
value=lang.includes("djfcgbsdhbvjh#");

console.log(value);