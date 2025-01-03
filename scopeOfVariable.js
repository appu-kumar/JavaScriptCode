
console.log(a);  // hoisting, var has global and functional scope

if(true){
    var a=4;
}



//

{           // these curly braces are the scope

    var a=5;     // this will be moved at the window scope means global scope
    let b=10;    // let and const variable moved at the top of this block scope
    const c=20;
}



function test(){
    var a=100;    // var has functional scope we can not aceess outside of the function
}

test()

console.log(a);