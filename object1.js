
// OOPs

/*

1)Object literal(used for single object)
2)functional contrutor(used in protypical,it is with js from origin)
3)class(ES6)
4)factory method(not in use)
.... might be more.

*/


// create object using class baad me dekhenge
// create object using literals

const obj={}  // {} yehi object hai okay  // single object, no inheritance   obj2 with these parameter create nhi hoga, it is not class, construtor function etc.
const symbolKey=Symbol("myphoto");

const jsUser={

    id:1,                              // id ---->"id" after compilation
    name:"appu kumar",
    subjects:["maths","science","English"],
    emailId:"appu6688kumar@gmail.com",
    isLoggedIn:true,
    fees:2353.5,
    "core subject":"maths",
    [symbolKey]:"photoId",

}

console.log(jsUser);

// how to access values 1).  2)[]
console.log(jsUser.id);               // it might be unsafe, suppose key is declared like this "core subjects" then . operator will not work.
console.log(jsUser["id"]);           // safe way 

  // console.log(jsUser."core subject");        // this gives error okay
  console.log(jsUser["core subject"]);          // safe way to access value okay
  console.log(jsUser[symbolKey]);    

  jsUser.greetings=function (){                // adding function in the jsUser object
         console.log("hello appu kumar");
  }

  ///console.log(jsUser.greetings);            // this prints reference of the function
  console.log(jsUser.greetings());




