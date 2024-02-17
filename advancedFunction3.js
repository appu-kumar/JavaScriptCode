

////IIFE  immediately invoked function expression     ()()               first ()  is for function declaration   second () is for function calling

function help(){           // declaration 
     console.log("help");
}
help();          // calling



/////////////////////////////////// IIFEs     
//IIFE stands for Immediately Invoked Function Expression. It's a JavaScript function that runs as soon as it is defined.
// if you want to execute the method once use IIFE okay


(function add(name){console.log(`hello ${name}`)})("appu");            // named IIFE   
((name)=>console.log("DB connected!"))();            // unnamed IIFE           declaration calling happening at same time.


