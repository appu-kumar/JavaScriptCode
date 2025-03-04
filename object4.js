

// Appu's way
function CreateUser(email, password) {
    // 4 steps followed by the new keyword  but we are not using the new keyword, we implementing the new keyword feature with custom object

    // 1st   Create a new object  
    let user = {}; 

    //2nd  Link the funtion's prototype with newly create object  inheritance
    user.__proto__ = CreateUser.prototype;


    // 3rd assign the properties
    user.email = email;
    user.password = password;

    
    // 4th return object
    return user; // Return the new object     // this object will be ignored by js 
}

CreateUser.prototype.print = function (){
    console.log("hello")
}

let user1 = CreateUser('appu@gmail.com', '1234');
user1.print();


// Js's way
// let's make above things with new keyword
function CreateUser1(email, password) {
    // 4 steps followed by the new keyword  

    // // 1st   Create a new object  
    // let this = {}; 

    // //2nd  Link the funtion's prototype with newly create object
    // this.__proto__ = CreateUser1.prototype;


    // 3rd assign the properties   now user is replaced by this
    this.email = email;
    this.password = password;

    
    // 4th return object
    // return this; // Return the new object     
}

// Now it looks like very simple


CreateUser1.prototype.hello = function (){
    console.log("hello")
}

let user2 = new CreateUser1('appu@gmail.com','1234');
user2.hello()


