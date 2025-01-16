// Create a promise for food delivery
const orderFood = (orderPlaced) => {
    return new Promise((resolve, reject) => {
      console.log("Order received. Preparing your food...");
  
      setTimeout(() => {
        if (orderPlaced) {
          resolve("Food is ready! Order is on its way.");
        } else {
          reject("Failed to prepare the food. Please try again later.");
        }
      }, 3000); // Simulate a 3-second delay for food preparation
    });
  };
  
  // **Consuming the Promise using .then() and .catch()**  first way of consuming promise
  orderFood(true)
    .then((message) => {
      console.log("THEN:", message);
    })
    .catch((error) => {
      console.log("CATCH:", error);
    });
  
  // **Consuming the Promise using async-await**
  const processOrder = async () => {
    try {

        // second way of consuming promise
      const message = await orderFood(true); // Change to `false` to simulate rejection
      console.log("ASYNC-AWAIT:", message);
    } catch (error) {
      console.log("ASYNC-AWAIT:", error);
    }
  };
  
  processOrder();
  