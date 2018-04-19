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

//3. Passing anonymous function, functions are treat as special objects in JavaScript
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

//-----march29--------Objects, Functions and 'this'------------
var march29 = {
    name: 'Han',
    log: function(){
        this.name = 'Han is your daddy now!';
        console.log(this);
        var that = this;
        function setname(newname)
        {   
            that.name = newname;
            console.log(that);
        }
        setname('Shoot! Han is your daddy again!');
    }
};

march29.log()

//-----march29--------Arrays---------------------
//Array is a collection that can hold many things inside
var arr = new Array();
var arr = [];
arr = [
    1,
    false,
    'this is a string :))))',
    {
        name:'Han',
        address:'6588 Nelson'
    },
    //unlike objects(key value pair), the function do not need a namespace
    function(name){
        console.log('Hello ' + name);
    }

]
//array can hold anything in JS
arr[4](arr[3].name);

//-----April 29--------Immediately Invoked Function Expressions---------------------
// IIFE function expression
var greeting3 = function(name){
    return 'Hello ' + name;
}('Joe');
console.log(greeting3);

//anything inside () should be a expression
//IIFE prevents variable collision
//the following IIFE syntax is valid

(function(name){
    console.log('Hellooo ' + name);
})('Jane');

//or
(function(name){
    console.log('Hellooo ' + name);
}('Jane'));


//How IIFE interact with global(window) object
(function(global){
    global.addSomethingToGlobal = 'How IIFE interact with global(window) object: addSomethingToGlobal';
}(window))

console.log(window.addSomethingToGlobal);

//----------------------------
//Practice find duplicated char in a array
var myArray = [1, 2, 3, 4, 5, 6, 8, 7];
console.log(
(function isRepeated(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++)
    {
        var temp = arr[i];
        for(var j = i + 1; j < len - 1; j++){
            if(temp === arr[j]){
                return true;
            }
        }
    }
    return false;
}(myArray)));


//------------Understanding Closures-------------------
function greetClosure(sayWhat){

    return function(name){
        console.log(sayWhat + '' + name);
    }
}

greetClosure('Hi')('HAN')

//------------Closure Example-------------------

function buildFunctions(){
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(
            
            function(){
                console.log(i);
            }

        )
    }
    return arr;
}
//logging 3 3 3, i = 3 by the time calling the function

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//logging 0 1 2, IIFE, create another exceution context to hold i
function buildFunctions2(){
    var arr = [];
    for (var i = 0; i < 3; i++){
        
        arr.push(
            
            (function(j){
                console.log(j);
            }(i))

        )
    }
    return arr;
}


var fs = buildFunctions2();


//------------Callback Functions-------------------
function callMeBack(callback){
    // do some work here
    // do some work here

    callback();
}

callMeBack(function(){
    console.log('this is your first callback function')
})

callMeBack(function(){
    console.log('this is the second callback')
})

//------------call() apply() bind()-------------------
var person = {
    firstName: 'Han',
    lastName: 'Shen',
    getFullName: function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(language1, language2){
    console.log('Logged: ' + this.getFullName());
    console.log('Input args: ' + language1 + ' ' + language2);
    console.log('--------------')
}

// logName(); will get error. Using bind method =>
logName.bind(person)();
//bind will create a copy of the targeted function, but not invoke that function, you need to use () to invoke.


//call and apply will invoke the function
//call() will take args
logName.call(person, 'en', 'chinese')
//apply() will take args as a array
logName.apply(person,['chinese','en'] )

//------------call() apply() bind()-------examples------------
//function borrowing
var person2 = {
    firstName: 'Jane',
    lastName: 'Coder'
}

console.log(person.getFullName.bind(person2)());
console.log(person.getFullName.apply(person2));
console.log(person.getFullName.call(person2));

//function currying use bind() ***
//Create a copy of a function but with some pre-set parameters(could be useful to set up default values of a function) 
function multiply(a, b) {
    return a*b;
}

//Here bind() is creating a copy of a original function and setting up the boundry of the original function
//this is pointing to Function: mutiply. 2 is setting the first argument to 2, 3 os settomg tje second argument

var multiplyByTwo = multiply.bind(this, 2, 3)();
console.log(multiplyByTwo);

//============== functional programming ===================
function caonimabzheshiyigewozijixiedeForEach(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2)
    }
    return newArr;
}

arr = [1, 2, 3];
console.log(arr);
console.log(caonimabzheshiyigewozijixiedeForEach(arr));

// we can write any method/function to replace '*2' operator, and passing the method to the caonimabzheshiyigewozijixiedeForEach function
function caonimabzheshiyigewozijixiedeForEach2(arr, fn){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

//when you call it, you write the anonymous function statement and passing as an argument
var arr2 = caonimabzheshiyigewozijixiedeForEach2(arr, function(item){
    // return a boolean 
    return item > 1;
})
console.log(arr2);

//if the 'fn' you want to pass has more than one argument, you can use bind() to pre-set other argument
var checkPassLimit = function(limit, item){
    return item > limit;
}

var checkPassLimitSimplified = function(limiter){
    //pre-bind() the function
    return checkPassLimit.bind(this, limiter);
}
var arr3 = caonimabzheshiyigewozijixiedeForEach2(arr, checkPassLimitSimplified(1)); 
console.log(arr3);


//============== functional programming - more example ===================
//using and learning underscore.js lib

var arr5 = _.map(arr, function(nimab){ return nimab*100});
console.log(arr5);

var arr6 = _.filter([2,3,2,3,5,6,4,8,453,14,3514,0], function(item){ return item%2 === 1});
console.log(arr6);