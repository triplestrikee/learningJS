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

//---------by value VS by refernce------------
//by value (primitives)
var a = 3;
var b;
b = a;
console.log(a);
console.log(b);

//by reference (all objects (including functions))
var c = { greeting: "hi" };
var d;
d = c;
c.greeting = 'hello'; //mutate

console.log(c);
console.log(d);

function changeGreet(obj){
    obj.greeting = "hola";
}

changeGreet(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'nihao' }
console.log(c);
console.log(d);