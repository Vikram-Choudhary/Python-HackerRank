// HackerRank --> 10 Days of Javascript



// Day 0: Hello, World!

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)

    // Write a line of code that prints parameterVariable to stdout using console.log:

}


// Day 0: Data Types

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    console.log(firstInteger + parseInt(secondInteger))

    console.log(firstDecimal + parseFloat(secondDecimal))

    console.log(firstString + secondString)
}


// Day 1: Arithmetic Operators

function getArea(length, width) {
    let area;
    area = length * width

    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = (length + width) * 2

    return perimeter;
}


// Day 1: Functions 

/*
 * Create the function factorial here
 */
function factorial(n) {
    if (n === 0) return 1;
    else return n * factorial(n - 1)
}


// Day 2: Conditional Statements: If-Else

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    if (score > 25 && score <= 30) grade = "A"
    else if (score > 20 && score <= 25) grade = "B"
    else if (score > 15 && score <= 20) grade = "C"
    else if (score > 10 && score <= 15) grade = "D"
    else if (score > 5 && score <= 10) grade = "E"
    else if (score >= 0 && score <= 5) grade = "F"

    return grade;
}


function main() {
    const score = +(readLine());

    console.log(getGrade(score));
}


// Day 2: Conditional Statements: Switch

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    switch (true) {
        case "aeiou".includes(s[0]):
            letter = "A"
            break;
        case "bcdfg".includes(s[0]):
            letter = "B"
            break;
        case "hjklm".includes(s[0]):
            letter = "C"
            break;
        default:
            letter = "D"
            break;
    }

    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}


// Day 2: Loops

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let nonVowels = "";
    [...s].forEach(a => "aeiou".includes(a) ? console.log(a) : nonVowels += a + '\n')
    console.log(nonVowels)

}

function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}


// Day 3: Arrays

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    return Array.from(new Set(nums)).sort((a, b) => { return b - a })[1]
}
function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}


// Day 3: Try, Catch, and Finally

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    }
    catch (e) {
        console.log(e.message)
    }
    finally {
        console.log(s)
    }
}


// Day 3: Throw

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a <= 0) {
        throw (a === 0 ? new Error("Zero Error") :
            new Error("Negative Error"))
    }
    else {
        return "YES"
    }
}


// Day 4: Create a Rectangle Object

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return { "length": a, "width": b, "perimeter": 2 * a + 2 * b, "area": a * b }
}


// Day 4: Count Objects

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.filter(ele => { return ele.x === ele.y }).length
}


//Day 4: Classes

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(lens) {
        this.lengths = lens
    }
    perimeter() {
        return this.lengths.reduce((a, b) => { return a + b })
    }
}


// Day 5: Inheritance

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return (this.w * this.h)
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify(['constructor'])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}


// Day 5: Template Literals

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const root = Math.sqrt((p * p) - (16 * a));
    const s1 = (p + root) / 4;
    const s2 = (p - root) / 4
    return [s2, s1]
}


// Day 5: Arrow Functions

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(ele => {
        if (ele % 2 == 0) ele * 2
        else ele * 3
    })
}


// Day 6: Bitwise Operators

function getMaxLessThanK(n, k) {
    return ((k | k - 1) > n) ? (k - 2) : (k - 1)
}


// Day 6: JavaScript Dates

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };
    let day = new Date(dateString).getUTCDay();
    return dayName[day];
}


// Day 7: Regular Expressions I

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    const re = new RegExp('^([aeiou]).+\\1$')

    /*
     * Do not remove the return statement
     */
    return re;
}


// Day 7: Regular Expressions II

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-z])*$')

    /*
     * Do not remove the return statement
     */
    return re;
}


// Day 7: Regular Expressions III

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = new RegExp('\\d+', 'g')
    /*
     * Do not remove the return statement
     */
    return re;
}


// Day 8: Create a Button  --> 3 Files

// index.html   --> file

// <!DOCTYPE html>
{/* <html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/button.js" type="text/javascript"></script>
    </body>
</html> */}

// js/button.js  --> file

let btn = document.createElement("Button");

btn.innerHTML = "0";
btn.id = "btn";
btn.className = "btnClass";

document.body.appendChild(btn);

btn.onclick = function () {
    btn.innerHTML++;
}

// css/button.css --> file

// .btnClass {
//     width: 96px;
//     height: 48px;
//     font-size: 24px;
// }


// Day 8: Buttons Container --> 3 Files

//index.html --> file

{/* <body>
    <script src="js/buttonsGrid.js" type="text/javascript"></script>
    <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    
    <div id="btns" class="btnContainer">
		<button id="btn1" class="btnStyle">1</button>
		<button id="btn2" class="btnStyle">2</button>
		<button id="btn3" class="btnStyle">3</button>
		<button id="btn4" class="btnStyle">4</button>
        <button id="btn5" class="btnStyle" onClick="rotate()">5</button>
        <button id="btn6" class="btnStyle">6</button>
        <button id="btn7" class="btnStyle">7</button>
        <button id="btn8" class="btnStyle">8</button>
        <button id="btn9" class="btnStyle">9</button>
	</div>
</body> */}

//js/buttonsGrid.js --> file

let l = "4";
let a = ["1", "2", "3", "6", "9", "8", "7", "4"];
let b = ["1", "2", "3", "6", "9", "8", "7", "4"];

let rotate = function () {
    for (let i = 7; i > 0; i--) {
        a[i] = a[i - 1];
    }

    a[0] = l;
    l = a[7];

    for (let i = 0; i < 8; i++) {
        document.getElementById("btn" + b[i]).innerText = a[i];
    }
}

//css/buttonsGrid.css --> file

// .btnContainer {
//     width: 75%;
// }

// .btnContainer > .btnStyle {
//     width: 30%;
//     height: 48px;
//     font-size: 24px;
// }



//  Day 9: Binary Calculator --> 3 files

//index.html --> file

// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Binary Calculator</title>
//         <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
//     </head>
//     <body>
//         <script src="js/binaryCalculator.js" type="text/javascript"></script>
//         <div id='res'></div>
//         <div id='btns'>
//             <button id='btn0' onclick="addNum(0)">0</button>
//             <button id='btn1' onclick="addNum(1)">1</button>
//             <button id="btnClr" onclick="clearArea()">C</button>
//             <button id="btnEql" onclick="calculateVal()">=</button>
//             <button id="btnSum" onclick="addNum('+')">+</button>
//             <button id="btnSub" onclick="addNum('-')">-</button>
//             <button id="btnMul" onclick="addNum('*')">*</button>
//             <button id="btnDiv" onclick="addNum('/')">/</button>
//         </div>
//     </body>
// </html>

//js/binaryCalculator.js --> file

function calculateVal() {
    values = document.getElementById('res').innerHTML;
    splitValues = values.match(/[* / \- +]/);

    operatorPos = splitValues.index;
    p = splitValues[0];
    firstVal = parseInt(values.substr(0, operatorPos), 2);
    secondVal = parseInt(values.substr(operatorPos + 1, values.size), 2);
    console.log(p);
    console.log(firstVal);
    console.log(secondVal);
    if (p == '+') {
        console.log((firstVal + secondVal));
        val = (firstVal + secondVal).toString(2);
    } else if (p == '-') {
        val = (firstVal - secondVal).toString(2);
    } else if (p == '*') {
        val = (firstVal * secondVal).toString(2);
    } else {
        val = (firstVal / secondVal).toString(2);
    }
    console.log(val);
    document.getElementById('res').innerHTML = val;
}

function addNum(p) {
    currentVal = document.getElementById('res').innerHTML;
    newVal = currentVal + p;
    document.getElementById('res').innerHTML = newVal;
}

function clearArea() {
    document.getElementById('res').innerHTML = '';
}

//js/binaryCalculator.css --> file

// body {
//     width: 33 %;
// }

// #res {
//     background - color: lightgray;
//     border: solid;
//     height: 48px;
//     font - size: 20px;
// }

// #btn0, #btn1 {
//     background - color: lightgreen;
//     color: brown;
// }

// #btnClr, #btnEql {
//     background - color: darkgreen;
//     color: white;
// }

// #btnSum, #btnSub, #btnMul, #btnDiv {
//     background - color: black;
//     color: red;
// }

// #btns > button {
//     width: 25 %; height: 36px; font - size: 18px; margin: 0px; float: left;
// }


//  Thank You !