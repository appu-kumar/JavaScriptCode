

console.log(addOne(6));          // ok            // declaration of the function automatically comes at top.  isi ko hoisting kahte hai ki declaration uper aa jata hai
function addOne(num)
{
    return num+1;
}

// console.log(addOne(6));  ok


// console.log(addTwo(8));       // not ok                         // addTwo iss line se pehele declare hi nhi hua hai. error dega.
const addTwo=function (num){                      // js ka variable kitna powerfull hai ki function ka  reference bhi store kar rha hai
    return num+2;
}

console.log(addTwo(8));             // ok
