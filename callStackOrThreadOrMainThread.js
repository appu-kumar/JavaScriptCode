// you can see file name it means main thread or call stack or thread all are same okay

//Even if you don't write a function, JavaScript still wraps your file's code inside an invisible function behind the scenes — called the Global Execution Context.


let x=5;
let y=3;
setTimeout(()=>{
  console.log("hi")
},20000)
console.log(x+y);


// entire file is converted into the function called global execution context and put inside the callStack okay 
// firstly global context will come out of the callstack and then setTimeout's callback will go inside callStack okay