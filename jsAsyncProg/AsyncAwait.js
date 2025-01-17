


// asnyc method always returns a promise
// promise is an object of the eventually completion of an async operation(method)


// I am creating my own promise
const p = new Promise((resolve,reject)=>{
     
      // do db connnection code here.
      // if res.ok=200
      let ok=false;
      if(ok){
          resolve("Db connnected successfuly");
      }
      else{
        reject("db not connected");
      }
})




/// consuming promise
/// then-catch
p
.then((res)=>console.log(res))
.catch((error)=>console.log(error))


// by async-await
// always return promise ok , if you return any value like "appu" it will wrap into promise object ok
async function dbConnected(){
      const res = await p;
      console.log(res);
}
dbConnected().catch((error)=>console.log(error))




// real use
// async is used to consume promise
// fetch returns promise 

async function fetchTodos(){
    try{
    const res = await fetch('https://dummyson.com/todos');    // fetch return promise
    const data = await res.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('it will run eventually')
        // disconnect the db if you want
    }
}

fetchTodos();
