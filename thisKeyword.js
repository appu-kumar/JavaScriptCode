
'use strict'
const user={
    name:"Appu kumar",
    rollNumber:5,
    age:23,
    greetings:function Hello(){console.log(`Hello ${user.name}, ram this side`)}        // this points current context. used in only inside the object and function
}


user.greetings();



// this in global space

console.log(this);

// this inside the function
// this in strict mode - (this subsititution)
function add(){
    console.log(this)          // if you are in strict mode then this will be substitute with calling object currently no object is calling add okay but in non strict mod this try to point global object which is window
                               // undefined(strict mode) or window(non strict mode) 
}

add()
// window.add();  



// this value depends on how this is called(window)

// this inside the object's methods

// call apply bind methods (sharing methods)

// this inside the arrow function

// this inside the nested arrow function

// this inside the DOM