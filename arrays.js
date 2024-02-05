

const arr=[1,3,3,5,6,6];

const arr2=new Array(1,3,5,6,6,6,6);

// console.log(arr);
// console.log(arr2);

// console.log(arr.length);
// console.log(typeof arr);

// console.log(arr[0]);

// arr.push(1111111);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift(1232);    // adding from front
// console.log(arr);
// arr.shift();
// console.log(arr);


/// slice--->ye array mese [i,j) range wale elements le lete hai without changing the array, and splice do similar but changes the array [i,j]

// console.log(arr)
// const myarr=arr.slice(1,3);
// console.table([arr,myarr]);

// splice 
console.log(arr);
const myarr=arr.splice(1,3);     // both boundary included
console.table([arr,myarr]);

