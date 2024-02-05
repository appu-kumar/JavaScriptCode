

/*
let name="appu";
let rollNumber="appu@gmail.com";

console.log(name+5+"ram");            // old way of concatenate the string


console.log(`Hello my name is: ${name} and rollNumberis :${rollNumber}`);

*/


const name=new String("appukumar");

// console.log(name.charAt(0));
// console.log(name.length);
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

// if you want to check all the method of the string go on the browser console and check all methods of the string.

/*
for(let i=0;i<name.length;i++)
{
    console.log(name.charAt(i));
}
*/


let customerName="   appukumar    ";             // form ke input field me user spaces add kar deta ha bymistake okayy

let tempCustomerName=customerName.trim();
console.log(tempCustomerName);


let url="http://localhost:8080/task id";
console.log(url.replace(' ','/'));




