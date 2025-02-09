// Promise.all([p1,p2,p3]) all are  resolved then returns [val1,val2,val3]
// if any of the promises is failled then return error of corrosponding promise


//The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
//  This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
// with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]




// Imagine booking a trip where you need to complete multiple tasks simultaneously, such as:

// Booking a flight.
// Reserving a hotel.
// Renting a car.
// Each task is independent, but you want all of them to be completed before proceeding. This is a perfect use case for Promise.all().
// real life example all are independent task, but we have to complete all
// Simulate booking a flight
const bookFlight = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Flight booked successfully!");
    }, 2000); // Takes 2 seconds
  });
  
  // Simulate reserving a hotel
  const bookHotel = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hotel reserved successfully!");
    }, 3000); // Takes 3 seconds
  });
  
  // Simulate renting a car
  const rentCar = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Car rented successfully!");
    }, 1000); // Takes 1 second
  });
  
  // Use Promise.all to wait for all promises
  Promise.all([bookFlight, bookHotel, rentCar])
    .then((messages) => {
      console.log("All tasks completed:");
      console.log(messages);
    })
    .catch((error) => {
      console.log("Error in one of the tasks:", error);  // send to the client
    });
  
