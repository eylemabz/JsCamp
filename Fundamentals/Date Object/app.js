let value;

const now=new Date();//şu an ki zamanı alabiliyoruz

const date1=new Date("7-19-1995 11:50:20");
const date2=new Date("July 19 1995");
const date3=new Date("7/19/1995");

value=date1;

value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();

value=date1.getHours();
value=date1.getMinutes();


date1.setMonth(5);
date1.setMonth(15);
date1.setMonth(1993);


value=date1





console.log(value);

