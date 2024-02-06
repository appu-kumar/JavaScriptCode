

const obj={
    id:"a",
    userId:'b',
    emailId:'c'
};

const {id,userId,emaiId}=obj;                // obj.id  se bachne ke liye {id} use karo and id ko use kro
console.log(id);
console.log(obj.id);

console.log(obj.userId);   // General way
console.log(userId); // easy due to de-structuring of object

