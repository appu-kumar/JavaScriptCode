

const arr1=[1,2,3,4,5,6,7,7,8,8];
const arr2=[12,1,2,1,2,3,3,4,4,4,4,4];

// arr2.concate(arr1)    joins two arrays and give new arrays okay
// const totalArr=arr1.concat(arr2);
// console.log(totalArr);

const totalArr=[...arr1,...arr2];
console.log(totalArr);