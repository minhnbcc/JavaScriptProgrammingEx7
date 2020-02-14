/*
JavaScript Programming Exercise 7 
Functions
*/

/** 
 * @description Log anything to the console
 * @param {*} obj The object to write to the console
*/
function l(obj){
    console.log(obj);
}

/**
 * This is a declarative function with no parameters or arguments
 */
function doThings(){
    l('I do stuff but have nothing to contribute or accept')
}

doThings();
/**
 * @description Adds two numbers
 * @param {number} value1  The first value
 * @param {number} value2  The second value
 */
function add(value1, value2){
    return value1 + value2;
}

l('Call declarative add function');
let a = add(3,2);
l(a);
l('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const subtract = function(value1, value2){
    return value1 - value2;
}

/**
 * @description Subtract two numbers. This is a function expression
 * @param {number} value1
 * @param {number} value2
 */
l('Call subtract function expression');
let b = subtract(9,5);
l(b);
l('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

/**
 * @description Multiply two numbers. This is an arrow function
 * @param {number} value1 
 * @param {number} value2 
 */
const multiply = (value1, value2) => {
    return value1 * value2;
}
l('Call multiply arrow function');
let c = multiply(3,4);
l(c);
l('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//function can be reassigned to  anything
//because JavaScript is a dynamic language
add ='Stephen';
l(add);

add = 3*4;
l(add);

l(subtract(add,10))