// const arr = new Array(5);  five size of the array
const arr = [1,2,3,4,5,6,7,8];

// TODO 
// forEach, map, filter, find, reduce


// only for traversal
// forEach 
// arr.forEach((ele,idx,arr) => {
//   console.log(ele,idx);
// })

// const squares =  arr.map((ele,idx,arr) => {
//     return ele*ele;
// })
// console.log('sqr',squares);





// apna methods okay 
function printing(ele,idx,arr) {
    console.log(ele)
}

function apnaForEach(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}

function mapcallback(ele,idx,arr){
    return ele*ele;
}

function mymap(callback){
   let arr = [];
   for(let i=0;i<this.length;i++){
       arr.push(callback(this[i]));
   }

   return arr;
}

function filtercallback(ele,idx,arr){
    return ele%2==0;
}

function myfilter(callback){
    let arr = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this))
              arr.push(this[i]);
    }

    return arr;
}


// Array.__proto__.apnaForEach = apnaForEach;
// Array.prototype.mymap = mymap;
// Array.prototype.myfilter = myfilter;
// arr.apnaForEach(printing);
// let squares = arr.mymap(mapcallback);
// console.log(squares);
// let filter = arr.myfilter(filtercallback);
// console.log(filter);


// do rest of the method
// Why Are We Writing Higher-Order Functions?
// Higher-order functions (HOFs) are functions that take other functions as arguments or return functions. They provide a more declarative, reusable, and readable way to work with data in JavaScript.

// When implementing custom versions of array methods (forEach, map, filter, etc.), we are following the principle of functional programming, which helps in making code more modular, maintainable, and expressive.


//[[Prototype]] or __proto__

// Every object of the js has [[Prototype]] hidden property can not be accessed  someObj.[[Prototype]]
// To access [[Prototype]] , __proto__ is used (__proto__ is like getter and setter)
const obj = { name: "Sneha" };
// console.log(obj[[Prototype]]); // ❌ Error! [[Prototype]] is hidden
obj.__proto__.x=10;
console.log(obj,obj.x);
// ✅ [[Prototype]] is the internal reference to an object's prototype.
// ✅ Cannot be accessed directly in JavaScript.
// ✅ Used by the JavaScript engine for prototype chain lookups.

// __proto__ (Deprecated but Usable)
// __proto__ is an accessible property that references the [[Prototype]] of an object.
// It allows us to get or set an object's prototype manually.
// It is deprecated in modern JavaScript but still supported for backward compatibility.

// const obj = { name: "Sneha" };
// console.log(obj.__proto__); // ✅ Works! Outputs the object's prototype
// ✅ __proto__ is a getter/setter for [[Prototype]].
// ✅ It is deprecated but still works in most environments.
// ✅ Allows manual prototype manipulation.

// Instead of using __proto__, use Object.getPrototypeOf() and Object.setPrototypeOf():
// const obj = { name: "Sneha" };
// console.log(Object.getPrototypeOf(obj)); // ✅ Recommended way to get prototype

// const newProto = { greet: () => "Hello" };
// Object.setPrototypeOf(obj, newProto);
// console.log(obj.greet()); // Output: "Hello"


// NOTE:-  __proto__ is refering to [[Prototype]]  in js object {}, but  prototype is refering to the [[Prototype]] of constructor because 0bject is created with constructor also na.

// Adding own functionalities with eg. Arrays.prototype.mymap = function (callback){}    is called polyfill okay
// Polyfill  means filling in ok means adding the own function inside the Array.prototype.myfun;













