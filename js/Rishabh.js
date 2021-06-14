// STRING IN JAVA SCRIPT

//if you write like this then there will be no gap between two strings!
// const name="RISHABH";
// const greeting="GOOD MORNING";
// console.log(greeting+ name)


// If you write like this then there will be gap b/w two strings
// const name="Rishabh";
// const greeting="GOOD MORNING ";
// console.log(greeting+name)


// const name="RISHABH";
// const greeting="GOOD MORNING";
// console.log(greeting+" "+name)


// let html;
// html="<h1> this is heading </h1>"+"<p> this is para </p>"
// console.log(html);


// FUNCTIONS OF STRING


// CONCAT--->It is used to place new strings in the end of the old string

// let html;
// html="<h1> this is heading </h1>"+"<p> This is para </p>";
// html=html.concat(" This"," is me");
// console.log(html);


//  .length----------->it tells the length of characters

// let html;
// html="RISHABH IS A LEGEND";
// console.log(html.length);

//  .toLowerCase----->It converts capital letters into small

// let html;
// code="THIS IS RISHABH";
// console.log(code);
// console.log(code.toLowerCase());

//  .toUpperCase() ------>It converts small letters into capital letters

// let html;
// html="this is Rishabh";
// code="this is ME";
// console.log(code.toUpperCase());
// console.log(html.toUpperCase());


//  Indexing---->1)Indexing starts from 0.
// 2)It will show the character whose character number we will give.

// let html;
// html="RISHABH";
// console.log(html[0]);
// console.log(html[4]);


//  .indexOf("")---->It tells the from which number the character has been start.

// let html;
// html="This is Rishabh";
// console.log(html.indexOf("shabh"));
// console.log(html.indexOf("is"));
// console.log(html.indexOf("R"));


//  .lastIndexOf-------->It has the same use like indexOf("");

// let html;
// html="This is Rishabh";
// console.log(html.lastIndexOf("Rishabh"));
// console.log(html.lastIndexOf("This is Rishabh"))


//  .charAt()=====>It is use to see the character at that particular no. position by giving no.

// let html;
// html="This is Rishabh";
// console.log(html.charAt(9));
// console.log(html.charAt(3));


//  .endsWith("")--->It tells us if our last character ends with our our given string then it will print true otherwise false

// let html;
// html="This is Rishabh";
// console.log(html.endsWith("Rishabh"));
// console.log(html.endsWith("This"));
// console.log(html.endsWith("Ri"));
// console.log(html.endsWith("bh"));


// .substring(x,y)-it prints the substring from given character no. to given character no.

// var html;
// html="RISHABH IS A LEGEND";
// console.log(html.substring(4,9));


// .slice()----->if we five minus values then it will print characters from last nd when we give positive value then it will print from front

// const html="THIS IS LEGENDARY OUTFIT";
// console.log(html.slice(-8)); It will print last 8 characters
// console.log(html.slice(5))  It will print from 5 to last


// .split("")----->It will split all the elements

// let html;
// html="THIS IS PM NARENDRA MODI";
// console.log(html.split(""));

// let html;
// html="THIS IS PM NARENDRA MODI";
// console.log(html.split("PM"))


//  .replace("","")----->It is used to replace character

// var html;
// html="this is Rishabh";
// console.log(html.replace("Rishabh","Ambesh"));


//  TEMPLATE LITERALS--->1)TEMPRAL LITERALS are string literals
// 2)We can use multiple strings in it
// 3)We can use inverted commas in it.

// let name="Rishabh";
// let fruit1="kiwi";
// let fruit2="Litchi";
// let myHtml=`Hello ${name}
// <h1>This is Rishabh?</h1>
// ${name} do you like ${fruit1} or ${fruit2}`;
// document.write(myHtml);
// console.log(myHtml)






