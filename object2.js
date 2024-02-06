

const tinderUser1=new Object();  // similar like Number()   // singleton provide karta hai like in java                {}  ye create karta hai
const tinderUser2={};

// tinderUser1 and tinderUser2  both are object declarations

tinderUser2.name="sita";
tinderUser2.id=1;
tinderUser2.emailId="sk@gmail.com";

console.log(tinderUser2);


// how to merge two object

const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};
const obj3={7:"d",8:"e",9:"f"};

// const resultObj=Object.assign({},obj1,obj2,obj3);         // first target, second source             {} this is target, obj1,boj2,obj3 are source
const resultObj={...obj1,...obj2,...obj3};               // second way of merging objects
console.log(resultObj);

