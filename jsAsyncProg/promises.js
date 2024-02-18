//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*
const promise=new Promise(function(resolve,reject){             // creation of promise

       // do some async task
       //db calls, network calls, cryptography calls etc.

       console.log("pehele");
       setTimeout(()=>{                            // let's assume this is an async task
               console.log("inside async task");
               resolve('ram');                               // resolve and then connected ok
       },2000);

       console.log("bad me");

})

// consumption of promise

promise.then(function(name){
    console.log("promise consume:::"+name);
})

*/


///////////////////////////// second way of writing promise

/*
new Promise(function(resolve,reject){

       setTimeout(function(){
               console.log("async task 1");
               resolve();               // connecting with then 
       },2000);
}).then(function(){
     console.log("async task completed");
})
*/


///////////////////////////////////////////////// third promise

const promise4=new Promise(function(resolve,reject){         // creation of the promise4        // do not reverse the parameter order res,rej      

      const result=true;
      if(result)
      {
            console.log("promise loaded...");
            resolve({name:"appu kumar",id:3});           // then se connected hai
      }
      else
      {
         console.log("promise rejecting....");
         reject("rejected");                         // directly connected to catch
      }
});

/*
promise4.then(function(user){        // consuming of the promise        // then chaining is possible
      console.log(user);
      return user.name;         // next then ko return hoga
}).then(function(nam){
       console.log(nam);
})
.catch(function(rej){
    console.log(rej);
}).finally(function(){
     console.log("ye to chalega either resolve or rejected");
});
*/

/////////////////////////  Note:: There are two ways to consume the promise   1)then,catch is used to consume the promise       2)async method await keyword


/*
(async function consumePromise4(){                    // IIFI
        try
        {
         const response=await promise4;
         console.log(response);
        }
        catch(error)
        {
            console.log(error);
        }
})();
*/

/*
/// consuming of the promise  jo ki fetch() lake deta hai let's do with then and catch
(async function consumeApi(){
         try
         {
         const response=await fetch('https://jsonplaceholder.org/comments');                            // fetch ek promise return karta hai okay
         const result=await response.json();
         console.log(result);
         }
         catch(error)
         {
             console.log(error);
         }
})();     */



//////////////////////////////// without async
fetch('https://jsonplaceholder.org/comments').
then(function(response){                               // iss then ke baad hi next then and uske baad catch chlata hi
          return response.json();
}).then(function(responsepart){
      console.log(responsepart);
}).catch(function(error){
       console.log(error);
}).finally(function(){
    console.log('paka chalega');
})