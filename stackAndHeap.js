



/*

let emailId="appu6688kumar@gmail.com";

let copyEmailId=emailId;         // copy is created  means pass-by-value
copyEmailId='3'+copyEmailId;
console.table([emailId,copyEmailId]);
*/

let student={
    name:"appu kumar",
    role:33,
}


let anotherStudent=student;     // pass by reference.       non-primitive ke sath pass by reference hi hota hai okay
anotherStudent.name='raja';

console.table([student,anotherStudent])



