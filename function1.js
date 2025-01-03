


// function statement aka function declaration
function adding(){
      console.log("adding");
}

function add1(num1,num2){                             // parameters-> num1,num2
    console.log(num1+num2);
}

function add2(num1,num2){                           
    return num1+num2;
}

function add3(...num)                 // rest or spread operator accn to uses we give the name 
{
    return num;
}

adding();
add1(2,3);  
console.log(add3(3,3,3,3,3,3,3,3,3,3));  
                        


const ans=add2;          // ans will store the reference of the function.
console.log(add2(2,3));  // arguments


// annoymous function is that function which is not holding any name below function is the example.
// function expression     we are assigning function like variable
var add =  function (){
   console.log("add kar dia");
}


