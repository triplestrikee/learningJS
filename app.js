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
//the following IIFE syntax is valid
(function(name){
    console.log('Hellooo ' + name);
})('Jane');

//or
(function(name){
    console.log('Hellooo ' + name);
}('Jane'));


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
})(myArray));
