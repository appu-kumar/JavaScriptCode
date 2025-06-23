// // Create a promise for food delivery
// const orderFood = (orderPlaced) => {
//     return new Promise((resolve, reject) => {
//       console.log("Order received. Preparing your food...");

//       setTimeout(() => {
//         if (orderPlaced) {
//           resolve("Food is ready! Order is on its way.");
//         } else {
//           reject("Failed to prepare the food. Please try again later.");
//         }
//       }, 3000); // Simulate a 3-second delay for food preparation
//     });
//   };

//   // **Consuming the Promise using .then() and .catch()**  first way of consuming promise
//   orderFood(true)
//     .then((message) => {
//       console.log("THEN:", message);
//     })
//     .catch((error) => {
//       console.log("CATCH:", error);
//     });

//   // **Consuming the Promise using async-await**
//   const processOrder = async () => {
//     try {

//         // second way of consuming promise
//       const message = await orderFood(true); // Change to `false` to simulate rejection
//       console.log("ASYNC-AWAIT:", message);
//     } catch (error) {
//       console.log("ASYNC-AWAIT:", error);
//     }
//   };

//   processOrder();

// // callback hell
//   getData(function(result) {
//   process(result, function(processed) {
//     display(processed, function() {
//       // So many nested levels!
//     });
//   });
// });

// console.log("2")

// setTimeout(()=>{

// },3000)

// console.log("3")


/*
This is callback hell or pyramid how to solve this with promise
function orderItem(isOrderPlaced,callback) {
  // api call but I do not have the api call
  if (isOrderPlaced) {
    setTimeout(() => {
      console.log("order placed!");
      callback(true)
    }, 3000);
  }
  else{
    callback(false);
  }
}

function getReadyItems(gotOrder,callback){
   if(gotOrder){
      setTimeout(()=>{
       console.log("items are being prepared!");
       callback(true)
      },3000)
   }
   else{
    callback(false)
   }
}

function readyForDeliver(gotReady,callback){
  if(gotReady){
       setTimeout(()=>{
        console.log("items are ready for deliver");
        callback();
      },3000)
  }
  else{
    callback();
  }
}

orderItem(false, function (gotOrder){
     getReadyItems(gotOrder,function (gotReady){
         readyForDeliver(gotReady,function (){
            console.log("All done!")
         })
     })
})

*/


function orderItem(isOrderPlaced) {
  // api call but I do not have the api call
  return new Promise((resolve,reject)=>{
     if (isOrderPlaced) {
    setTimeout(() => {
      console.log("order placed!");
      resolve(true);
    }, 3000);
  }
  else{
    reject(false);
  }
  })
}

function getReadyItems(gotOrder){
   return new Promise((resolve, reject)=>{
        if(gotOrder){
      setTimeout(()=>{
       console.log("items are being prepared!");
       resolve(true)
      },3000)
   }
   else{
    reject(false)
   }
   })
  
}

function readyForDeliver(gotReady){
 return new Promise((resolve,reject)=>{
 if(gotReady){
       setTimeout(()=>{
        console.log("items are ready for deliver");
        resolve();
      },3000)
  }
  else{
    reject();
  }
 });
}

orderItem(true)
.then((gotOrder)=>getReadyItems(true))
.then((gotReady)=>readyForDeliver(true))
.then(()=> console.log("All done!"))
.catch(()=>console.log("Error"))


