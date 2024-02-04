let score=33;

console.log(typeof score);      // number
// or
console.log(typeof(score));   // number


let score1="33";

console.log(typeof(score1));           // string
let scoreNumber=Number(score1);       // suppose score1 backend or form se aa rha hai      conversion step.
console.log(typeof(scoreNumber));     // number

let score2="33abc";          // this is not numeric string
console.log(Number(score2));   // NaN   not a number

/*
    let input;
    Number(input)==>output

     input    output
    "33"  ===>33
    "33abc"===>NaN
    true-===>1
    false==>0
    null===>0
    "appu"===>NaN



    Number() converts in number
    String() converts in string
    Boolean() converts in boolean etc.
*/