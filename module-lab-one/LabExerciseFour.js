function subtract(x1, x2) {
    return "The subtraction of " + x1 + " and " + x2 + " is " + (x1 - x2);
}

function add(x1, x2) {
    return "The addition of " + x1 + " and " + x2 + " is " + (x1 + x2);
}

function multiply(x1, x2) {
    return "The multiplication of " + x1 + " and " + x2 + " is " + (x1 * x2);
}

function divide(x1, x2) {
    return "The division of " + x1 + " and " + x2 + " is " + (x1 / x2);
}

console.log(subtract(22,20)); 
console.log(subtract(20,22));
console.log(subtract('a','b'));  
console.log(subtract(22,'c')); 
console.log(add(6,1));
console.log(add(-1,0));
console.log(add('a',100));
console.log(add('c','ddd'));
console.log(multiply(4,2));
console.log(multiply(-4,0));
console.log(multiply('a','b'));
console.log(divide(4,4));
console.log(divide(-4,2));
console.log(divide(0,5));
console.log(divide(5,0));

function greeting(name) {
    return "Hello " + name;
}
console.log(greeting("Jayden"));