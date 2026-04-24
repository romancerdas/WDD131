const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area); // 28.26

radius = 20;
area = radius * radius * PI;

console.log(area); // 1256


// Type coercion, JS assumes we meant "const 2" to be a int instead of a string, so it converts it to a number before multiplying.
const one = 1;
const two = '2';

let result = one * two;
console.log(result); // 2

// Exception, addition causes concatination rather than forcing two to be a int
result = one + two;
console.log(result); // 12

// Here, Number() forces two to be interpreted as a number
result = one + Number(two);
console.log(result); // 3


// Scope
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    