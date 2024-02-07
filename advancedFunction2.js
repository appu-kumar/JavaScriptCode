


function normalFun(){
      console.log("hello");
}
normalFun();

// const arrowFun=(num1,num2)=> { return num1+num2; }                           // curly braces lagaoge to return likhna pdega  explicit return
// const arrowFun=(num1,num2)=> (num1+num2);                                       //() ye object return karne me help karta hai
const arrowFun=(num1,num2)=> ({name:'raju',rollNumber:5});
// const arrowFun=(num1,num2)=> num1+num2;                                          // implicit return 
// console.log(arrowFun(3,6));


const obj = {
    name: 'John',
    sayName: function() {
      console.log(this.name);
    },
    sayNameArrow: () => {
      console.log(this.name); // 'this' refers to the global scope, not 'obj'
    }
  };
  
  obj.sayName(); // Output: 'John'
  obj.sayNameArrow(); // Output: undefined (or error if 'name' isn't defined globally)
  