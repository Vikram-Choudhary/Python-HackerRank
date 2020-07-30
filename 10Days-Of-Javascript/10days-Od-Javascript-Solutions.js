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


//

