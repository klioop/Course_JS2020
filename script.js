// THE VARIABLE OBJECT
// 1) The argument object is created, containing all the arguments that were passed
// into the function.
// 2) Code is scanned for function delarations: for each function, a property
//                                              is created in the Variable Object, 
//                                              pointing to the function.
// 3) Code is scanned for variable declarations: for each variable, a property is created
//                                               in the Variable Object, and set to 
//                                               undefined.
// 4) 2) and 3) are Hoisting.
// Functions and variables are hoisted in JavaScript,
// which means that they are available 
// before the execution phase actually starts.

// The difference between functions and variables is that
// functions are already defined
// before the execution phase starts,
// while variables are set up to "undefined"
// and will only be defined in the execution phase.

// Each execution context has an object (Variable Objcet)
// which stores a lot of important data
// that the function will use while it's running,
// and this happens even before the code is executed.


// calculatAge(1965);


// function calculatAge(year) {
//     console.log(2020 - year);
// }


// retirement(1956);
var retirement = function (year) {
    console.log(65 - (2020 - year));
} // not function declaration, but function expression
// Hoisting only works with function declaration

// variables

console.log(age);
var age = 23; // variables that don't have a value yet,
// will always have the data type undefined.

function foo() {
    console.log(age);
    var age = 65; // Excution context of foo function
    console.log(age);
}

foo();
console.log(age);

// For Hoisting, it's the fact that we can
// use function declarations before we actually declare
// them in our code

// Scoping
// Scoping answers the question "where can we access a certain variable?"
// Each new function creates a scope: the space/environment, in which
// the variables it defines are accessible.
// In JS, the only way to create a new scope is to write a new function.
// In JS, there is also lexical scoping.
// lexical means where something is written in the code.
// So, it's about the position of something within our code.

// lexical scoping: a function that is lexically within another function
// gets access to the scope of the outer function, which means that it's written
// inside of another function and gets access to a scope of the outer function,
// called the parent function. With that, it also gets access to the variables
// and functions that the parent function defines.

// In the creation phase, each excution context object will get exact scope chain,
// which is basically all the variables objects that an execution context has access to.
// The variable object is what stores all the defined variables and functions.
// 

// var a = "Hello!";
// first();

// function first() {
//     var b = "Hi";
//     second();

//     function second() {
//         var c = "Hey!";
//         console.log(a + b + c);
//     }
// }


// EXCUTION STACK VS SCOPE CHAIN
// EXCUTION STACK: Order in which functions are called
// SCOPE CHAIN: Order in which functions are written lexically
// What determines the scope of variables is where the functions are written.
// It's excution contexts that store the scope chain of each function in the 
// variable object, but they do not have an effect on the scope chain itself.

// var a = "Hello!";
// first();

// function first() {
//     var b = "Hi";
//     second();

//     function second() {
//         var c = "Hey!";
//         console.log(a + b + c);
//     }
// }
// function third() {
//     var d = "John";
//     console.log(a + b + c + d);
// }
// third();

var a = "Hello!";
first();

function first() {
    var b = "Hi";
    second();

    function second() {
        var c = "Hey!";
        third();
    }
}
function third() {
    var d = "John";
    // console.log(c);
    console.log(a + d);
}

// "This" Variable
// 'This' Variable is stored in the excution context.
// Regular function call: the "this" keyword points at the global object,
//                        (the window object, in the browser).

// Method call: the "this" variable points to the object that is calling the method
// The "this" keyword is not assigned a value until a function where it is defined
// is actually called.

// console.log(this);

// calculatAge(1985);

// function calculatAge(year) {
//     console.log(2020 - year);
//     console.log(this)
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculatAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculatAge();

// Method Borrowing

var mike = {
    name: "Mike",
    yearOfBirth: 1984,
};

mike.calculatAge = john.calculatAge;
mike.calculatAge();

// "This" Keyword only becomes something as soon as the method gets called!!
