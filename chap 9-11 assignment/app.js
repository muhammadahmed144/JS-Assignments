// // CHAPTER NO 9-11
// // QUESTION NO 1
// let usercityname = prompt("Enter your city name")
// if(usercityname === "Karachi"){
//     alert("Welcome to city of lights")
// }
// // QUESTION NO 2
// let usergendername = prompt("Enter your gender name")
// if(usergendername === "male"){
//     alert("Good Morning Sir")
// } else if(usergendername === "female"){
//     alert("Good Morning Ma'am")
// }
// // QUESTION NO 3
// let trafficroadsignle = prompt("Singnal color")
// if(trafficroadsignle === "Red"){
//     alert("Must Stop")
//     } else if(trafficroadsignle === "Yellow"){
//     alert("Ready to move")
//     } else if(trafficroadsignle === "Green"){
//         alert("Move now")
//     }
// // QUESTION NO 4
// let carfuel = +prompt("remaining fuel in car (in litres)")
// if(carfuel === 0.25){
//     alert("Please refill the fuel in your car")
// }
// // QUESTION NO 5
// let a = 4
// if(++a === 5){
//     alert("given condition for variable a is true")
// }
// let b = 82
// if(b++ === 83){
//     alert("given condition for variable b is true")
// }
// let c = 12
// if(c++ === 13){
//     alert("condition 1 is true")
// }
// if(c === 13){
//     alert("condition 2 is true")
// }
// if(++c <14){
//     alert("condition 3 is true")
// }
// if(c === 14){
//     alert("condition 4 is true")
// }
// let materialCost = 20000
// let laborCost = 2000
// let totalCost = `${materialCost} ${laborCost}`
// if(totalCost === `${laborCost} ${materialCost}`){
// alert("The cost equals")
// }
// if(true){
//     alert("True")
// }
// if(false){
//     alert("False")
// }
// if("car"<"cat"){
// alert("car is smaller than cat")
// }
// // QUESTION NO 6
// let subject1 = prompt("Enter your first subject name");
// let subject2 = prompt("Enter your second subject name");
// let subject3 = prompt("Enter your third subject name");
// let totalMarks = 100;
// let obtained1 = +prompt(`Enter your obtained marks ${subject1}`);
// let obtained2 = +prompt(`Enter your obtained marks ${subject2}`);
// let obtained3 = +prompt(`Enter your obtained marks ${subject3}`);
// let totalObtained = obtained1 + obtained2 + obtained3;
// let overalltotal = totalMarks * 3
// let percentage = (totalObtained / overalltotal) * 100;
// let Grade;
// let Remarks;
// if (percentage >= 80) {
//     Grade = "A-one";
//     Remarks = "Excellent";
// } else if (percentage >= 70) {
//     Grade = "A";
//     Remarks = "Good";
// } else if (percentage >= 60) {
//     Grade = "B";
//     Remarks = "you need to improve";
// } else {
//     Grade = "Fail";
//     Remarks = "Sorry";
// }
// document.writeln(`<h2>Marks Sheet</h2>`);
// document.writeln(`Total marks: ${overalltotal} <br>`);
// document.writeln(`Marks obtained: ${totalObtained} <br>`);
// document.writeln(`Percentage: ${percentage} <br>`);
// document.writeln(`Grade: ${Grade} <br>`);
// document.writeln(`Remarks: ${Remarks} <br>`);

// // QUESTION NO 7:
// let secretNum = 4
// let userInput = +prompt("guess a secret number")
// if(userInput === secretNum){
//     document.writeln("Bingo! Correct answer")
// } else if(userInput === secretNum +1){
//     document.writeln("Close enough to the correct answer")
// } else {
//     document.writeln("wrong number")
// }

// // QUESTION NO 8:
// let num = +prompt("Enter a number for divide by 3");//10, 9
// if(num % 3 === 0){
//     alert("yes your given number is divisible by 3");
// } else{
//     alert("your given numbet is not divisible by 3")
// }
// // QUESTION NO 9:
// let num = +prompt("Enter a number for even or odd")
// if(num % 2 === 0){
//     alert("yes your even number")
// } else{
//     alert("yes your odd number")
// }
// // QUESTION NO 10:
// let temperature = +prompt("Enter a temperature value")
// if(temperature === 40){
//     alert("It is too hot outside")
// } else if(temperature === 30){
//     alert("The Weather today is Normal")
// } else if(temperature === 20){
//     alert("Todays's Weather is cool")
// } else if(temperature === 10){
//     alert("OMG! Today's weather is so Cool")
// }
// // QUESTION NO 11:
// let a = +prompt("Enter a first number")
// let b = +prompt("Enter a second number")
// let operator = prompt("Enter the Operator (+-*/%)")
// if(operator === "+"){
//     alert(a+b)
// } else if(operator === "-"){
//     alert(a-b)
// } else if(operator === "*"){
//     alert(a*b)
// } else if(operator === "/"){
//     alert(a/b)
// } else if(operator === "%"){
//     alert(a%b)
// }