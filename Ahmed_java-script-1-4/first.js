//CHAPTER NO 01;
//QUESTION NO 01;
alert("Welcome! to my website");
//QUESTION NO 02;
alert("Error! Please enter a valid password.")
//QUESTION NO 03;
alert("Welcome to Js Land...Happy Coding.")
//QUESTION NO 04;
alert("welcome to Js Land...")
alert("prevent this page from creating additional dialogs.")
//QUESTION NO 05;
onsole.log ("HELLO! i can run js through my web browsers console");
//QUESTION NO 06;
//QUESTION NO 07;

function showAlert(){
alert("Hello! You clicked the button.");
}

//CHAPTER N0 02;
//QUESTION NO 01;
var username
//QUESTION NO 02;
var myName
FullName= "Muhammad Ahmed Mohsin"
//QUESTION NO 03;
var message
var message ="Hello World"
alert("message")
//QUESTION NO 04;
alert("Muhammad Ahmed")
alert("14 years old")
alert("Smit student modern web & app developer")
//QUESTION NO 05;
alert("PIZZA" +"\n" +"PIZZ"+"\n"+"PIZ"+"\n"+"PI"+"\n"+"P")
//QUESTION NO 06;
var email
email ="Email Address"   
alert("My email address ahmed@gmail.com")
//QUESTION NO 07;
var book
alert("I am trying to Learn from the BookA smarter \n way to Learn JavaScript")
//QUESTION NO 08;
document.writeln("Yah I can write HTML content through JavaScript")
//QUESTION NO 09;
alert("═════════≼≽❈❉❈≼≽═════════")


//END

// CHAPTER NO 3 
// QUESTION NO 1
let age = 14
alert("I am a 14 years old")
// QUESTION NO 2
let visit = localStorage.getItem("visitCount")
if(visit === null) {
    visit = 1;
}else{
    visit = Number(visit) +     1 
}
localStorage.setItem( "visitCount",visit)
alert("you have viisited this site " + visit + "times")
// QUESTION NO 3
let birthYear = 28
document.writeln("My birth year is ", birthYear, "<br> Data type of declared variable is number ")
// QUESTION NO 4
let visitorname = "Jhon Doe"
let producttitle = "T-Shirt"
let  Quantity = 5
document.writeln(visitorname ,"<br>ordered",Quantity , producttitle,"<br>(s) on XYZ Clothing store")
// CHAPTER NO 4
// QUESTION NO 1
let x , y , z
// Legal
let myVar;
let $price;
let _name;
let user1;
let totalAmount;

// Illegal x 
// var 1user;
// var my-var;
// var var;
// var user name;
// var @total;
document.writeln("<h2>Rules for naming JS variables</h2>")
document.writeln("Variable names can only contain, $ and _ . For example : $my _ 1stVariable<br> Variable must must begin with a letter, $ or _ . For example : $name, _name  or name<br> Variables names are case sensetive<br>Variables names should not be JS keywords")

