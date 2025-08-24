// CHAPTER NO 6-9

// QUESTION NO 1
// Demonstrate increment/decrement operators

let a = 10;
document.writeln("QUESTION NO 1<br>");
document.writeln("Result:<br>The value of a is: " + a + "<br>");
document.writeln("-----------------------------<br><br>");
document.writeln("The value of ++a is: " + (++a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");
document.writeln("The value of a++ is: " + (a++) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");
document.writeln("The value of --a is: " + (--a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");
document.writeln("The value of a-- is: " + (a--) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

// QUESTION NO 2
// Explain step by step result of expression
document.writeln("<br><br>QUESTION NO 2<br>");
let b = 2, c = 1;
/*
   --b; // 1
   --c; // 0
   ++c; // 1
   c--; // 1 (then becomes 0)
    result = --b - --c + ++c + c--;
*/
let result = --b - --c + ++c + c--;
document.writeln("Result: " + result + "<br>");
document.writeln("Final value of b: " + b + "<br>");
document.writeln("Final value of c: " + c + "<br>");

// Question 3: Greet the user by name
let userName = prompt("Enter your name:");
alert("Hello, " + userName + "! Welcome!");

// Question 5: Multiplication table with default 5 if no input
let tableNum = prompt("Enter a number for multiplication table (default is 5):");
if (tableNum === "" || tableNum === null || isNaN(tableNum)) {
    tableNum = 5;
} else {
    tableNum = Number(tableNum);
}
document.writeln("<h3>Multiplication Table of " + tableNum + "</h3>");
for (let i = 1; i <= 10; i++) {
    document.writeln(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

// Question 6: Subjects, marks, and percentage table
let subject1 = prompt("Enter name of first subject:");
let subject2 = prompt("Enter name of second subject:");
let subject3 = prompt("Enter name of third subject:");
let totalMarksEach = 100;
let obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
let obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
let obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");
let totalMarks = totalMarksEach * 3;
let totalObtained = obtained1 + obtained2 + obtained3;
let percentage1 = (obtained1 / totalMarksEach) * 100;
let percentage2 = (obtained2 / totalMarksEach) * 100;
let percentage3 = (obtained3 / totalMarksEach) * 100;
let overallPercentage = (totalObtained / totalMarks) * 100;

document.write(`
    <h3>Result Table</h3>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${subject1}</td>
            <td>${totalMarksEach}</td>
            <td>${obtained1}</td>
            <td>${percentage1.toFixed(0)}%</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${totalMarksEach}</td>
            <td>${obtained2}</td>
            <td>${percentage2.toFixed(0)}%</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${totalMarksEach}</td>
            <td>${obtained3}</td>
            <td>${percentage3.toFixed(0)}%</td>
        </tr>
        <tr>
            <th>Total</th>
            <th>${totalMarks}</th>
            <th>${totalObtained}</th>
            <th>${overallPercentage.toFixed(0)}%</th>
        </tr>
    </table>
`);