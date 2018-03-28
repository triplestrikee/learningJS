//THREE WAYS OF DEFINING FUNCTION IN JS
//1. function statement
function greet(){
    console.log('Hi');
}

//2. function expression, functions are objects in JS
var greet2 = function(){
    console.log('Hi2');
}


greet();
greet2();

//3. Passing anonymous function, functions are treat as special objects 
function log(a){
    console.log();
}

log(function(){
    console.log('hi4')
});