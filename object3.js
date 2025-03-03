// OOPs
/*

1)Object literal(used for single object)
2)functional contrutor(used in protypical,it is with js from origin)
3)class(ES6)
4)factory method(not in use)
.... might be more.

*/


// constructor function is function that creates and returns the object.
function User(name,password){
    this.name=name;
    this.password=password;
    this.greeting = function (age){
        console.log(`Hello this is ${this.name} ${age}`);
    }
    // this.greeting= function(age,gender){   // this will override the previous method okay 
    //     console.log(`Hello this is ${this.name} ${gender} ${age}`);
    // }
    return this;   // automatically this is being returned, return this is option
}



let user1 = new User('appu','123');
let user2 = new User("akash",'2324')
user1.greeting(23);
user2.greeting('male',25);


// The User function is a constructor function.
// new creates a new object and assigns this to it.
// Properties are assigned to the new object.
// The new object is returned automatically.
// Using class syntax is a modern alternative.


let obj10 = {}   // internaly creates the [[prototype]](accessed by __proto__ in static object creationg)  with constructor function prototype is used
console.log('10',obj10);
obj10.__proto__.print = function (){
    console.log("oye namaste")
}

/*

__proto__ is a property of every object and points to the prototype from which the object inherits.
It links an instance to its constructor’s prototype (sparrow.__proto__ === Bird.prototype).
It allows us to access properties/methods defined on the prototype.

*/

// obj10.print();

function Bird(name,color,canFly){
    this.name = name;
    this.color = color;
    this.canFly = canFly;
    // Bird.prototype.print = function (){    // not recommended because every time it will create the function and assign to prototype time waste and memeory waste
    //     console.log(`[name:${this.name},color:${this.color},canfly:${this.canFly}]`);
    // }
}

Bird.prototype.print = function (){    // function is an object in js that is why we are able to add properties inside it
    console.log(`[name:${this.name},color:${this.color},canfly:${this.canFly}]`);
}

// with the help of the object we use __proto__  and with constructor name we use prototype see above
let sparrow = new Bird('sparrow','red',true);
// sparrow.__proto__.print = function () {                   // not recommended because it modifies the logic of the every object
//     console.log(`[name:${this.name},color:${this.color},canfly:${this.canFly},'xyx]`);
// }
sparrow.print();

let crow = new Bird('crow','black',true);
crow.print();