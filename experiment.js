// console.log(null == undefined)

// const user = { name: "Appu", age: 22 };
// const jsonStr = JSON.stringify(user);
// JSON.stringify()  converts the things in string first and all the element of the array or object also with rules  and make the string overall, 

// console.log(typeof jsonStr); 
// // Output: '{"name":"Appu","age":22}'

// JSON.stringify() it is used to convert js object into the json string so that we can transfer the data in the network means serialization
// JSON.parse() it is used to convert json string into the js objet(means deserialization)

const arr = [2,3,4,5,5];
console.log(typeof arr[0])
const stringified = JSON.stringify(arr);

console.log(stringified[2]);



const arr1 = [2,3,3,3,4];
const arr2 = [2,3,3,3,4];

console.log(JSON.stringify(arr1) == JSON.stringify(arr2)); // true

console.log([,,,].length)  //3 


