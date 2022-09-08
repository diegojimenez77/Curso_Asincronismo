// This is a callback example
function sum(num1, num2){
    return num1 + num2;
}

function calc (num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));

// This is an example of a callback using a setTimeout after 2 seconds
setTimeout(function() {
    console.log('Hola Javascript');
}, 2000)


// This is a callback example
function greeting(name){
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Oscar');
