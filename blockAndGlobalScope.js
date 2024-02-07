//Note:: let and const have block scope
// var has global scope

// {}  this is block       function, loop,if etc have this curly braces.


var c=300;            // global scope

if (true) {

    let a = 30;             // a,b are visible inside {} this outside no visiblity
    const b = 40;
    var c = 50;               // but c is visible outside of the {}      this creates problem.    2)redeclaration also possible with var keyword again big problem.
}


// console.log(a);
// console.log(b);
console.log(c);          // c is visible here.  this could not be here.