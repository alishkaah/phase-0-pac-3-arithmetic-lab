var a, b
a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)
function add(a,b) {
    return a + b; 
}

function subtract(a,b) {
    return a - b; 
}

function multiply(a,b) {
    return a*b ;
}

function divide(a,b) {
    return a/b; 
}

function increment(a) {
    return ++a; 
}

function decrement(a) {
    return --a; 
}

function makeInt(n,base=10) {
    return parseInt(n,base); 
}

function preserveDecimal(n,base=10) {
    return parseFloat(n,base); 
}