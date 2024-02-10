//In JavaScript, filter, map, and reduce are all higher-order array methods used to manipulate arrays in different ways:

/*
filter:

The filter method is used to create a new array containing elements that pass a certain condition or criteria.
It iterates over each element of the array and returns a new array containing only the elements for which the provided callback function returns true.
It does not modify the original array.


Syntax: array.filter(callback(element[, index[, array]])[, thisArg]).

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers will be [2, 4]


*/


/*
map:

The map method is used to transform each element of an array using a provided callback function.
It iterates over each element of the array and returns a new array containing the results of applying the callback function to each element.
It does not modify the original array.


Syntax: array.map(callback(currentValue[, index[, array]])[, thisArg]).


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
// squaredNumbers will be [1, 4, 9, 16, 25]

*/

/*
reduce:

The reduce method is used to reduce an array to a single value by applying a callback function to each element of the array.
It iterates over each element of the array, accumulating a single result by applying the callback function with an accumulator and the current element.
It can be used for tasks such as summing up all elements, calculating averages, or any other form of aggregation.
Syntax: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]).
Example:

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum will be 15

*/

const values=[1,2,3,4,5,6,7,8,9,10];

let initialValues=0;

const sum=values.reduce((acc,curr)=>{return acc+curr},0);
console.log(sum);



/////////////////////////////// we can do with total sum with the forEach loop      but reduce ke apne uses hai 
let sum1=0;
values.forEach((item)=>{
    sum1+=item;
})
console.log(sum1);






