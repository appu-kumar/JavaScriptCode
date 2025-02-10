
// 'use strict'
// const user={
//     name:"Appu kumar",
//     rollNumber:5,
//     age:23,
//     greetings:function Hello(){console.log(`Hello ${user.name}, ram this side`)}        // this points current context. used in only inside the object and function
// }


// user.greetings();



// this in global space

console.log(this);

// this inside the function
// this in strict mode - (this subsititution)
function add(){
    console.log(this)          // if you are in strict mode then this will be substitute with calling object currently no object is calling add okay but in non strict mod this try to point global object which is window
                               // undefined(strict mode) or window(non strict mode) 
}

// add()
// window.add();  



// this value depends on how this is called(window)

obj = {
    a:5,
    x:function (){
        console.log(this)   // this is subsituted with obj
    }
}

// obj.x();

// this inside the object's methods

// call apply bind methods (sharing methods)

obj2 = {
    a:5,
    print:function () {
        console.log('hi', this.a);
    }
}

obj3 = {      // I want to use print inside obj3 how? apply, bind , call method
    a:10,
}

obj2.print.call(obj3);   
obj2.print.apply(obj3);
let fnref = obj2.print.bind(obj3)
fnref();
// this inside the arrow function

// this inside the nested arrow function

// this inside the DOM