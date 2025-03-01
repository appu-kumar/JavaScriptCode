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
    return this;   // automatically this is being returned, return this is option
}



let user1 = new User('appu','123');
let user2 = new User("akash",'2324')
console.log(user1)
console.log(user2)


// The User function is a constructor function.
// new creates a new object and assigns this to it.
// Properties are assigned to the new object.
// The new object is returned automatically.
// Using class syntax is a modern alternative.
