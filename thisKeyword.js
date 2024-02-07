

const user={
    name:"Appu kumar",
    rollNumber:5,
    age:23,
    greetings:function Hello(){console.log(`Hello ${this.name}, ram this side`)}        // this points current context. used in only inside the object and function
}


// user.greetings();
// console.log(this);  ok  will give {}


function service()
{
    const name="raju";
    console.log(this.name);                   // see this keyword does not work in the function, loops and if block   it means 'this' keyword is valid in object
}

service();