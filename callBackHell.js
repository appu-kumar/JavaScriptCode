// callbacks handle async programming in js
// async programming:- Running mutiple functions parallely with other functions is called async programming
const cart = ["potato", "onion", "carrot"];

//A callback is a function passed as an argument to another function in JavaScript. 
// It is invoked after the completion of an asynchronous operation, allowing code to run after a task is done. 
// Callbacks enable non-blocking, sequential execution of tasks in asynchronous programming.

// function selectItems(cart,callback){
//     console.log('itme selected')
//     callback();
// }

// Main function
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
}

// Add function
const add = (array) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    console.log(sum);
}

// Calling main function
mainFunction(add);



//callback hell
// selectItems(cart, function () {
//   updateCount(function () {
//     showDetails(function () {
//       doPayment(function () {});
//     });
//   });
// });


// we do not know when createOrder will call the doPayment method, that is why promise came into picture.
createOrder(cart,function doPayment(orderId){

});


