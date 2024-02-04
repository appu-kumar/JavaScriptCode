"use strict";                // this statement allows to write newer version of js.

// Note:: js is dynamically types language, because data type is defined at run time.

// types of dataTypes   1)primitive(pass by value)  2)non primitive(pass by reference)
//primitive type(pass by value) 7::::::::: String,Number,Boolean,null,undefined,Symbol,BigInt
//non primitive types(pass by reference):::: object,arrays,function



let age=35;           // number
let names="rahul kumar";  // string
let loggedIn=true   // boolean type
let salary=8.8     // number type

let mobileNumber=3543463363;    let week="sat";               // will not work just terminate the first statement--->now working--->but where is readability just write in the next line

//alert(3+3);             // we r using node.js not browser okay

let state;         // js engine will assign undefined value 
let subject=null;      // null value means missing value not found okay

/*
     int--->2^56 around
     string-->""
     boolean -->true/false
     undefined--->undefined
     object---->{key:val,key:val}
     null is object type ok    interview question


*/

console.log(typeof state);   // undefined
console.log(typeof null);      // object
console.log(typeof(salary));  // number