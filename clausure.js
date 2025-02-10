

function outer(){
    let b=4;               // outside of the inner is the lexical and clausure of the inner method
    function inner(){    
        console.log(b);
    }

    return inner;      // not returning only function it is returing the clausure as well means b=4 okay
}


 outer()();


 /*

Key Differences Between Lexical Scope and Closure
Feature                         Lexical Scope	                                                                                          Closure
Definition	                    Determines which variables are accessible based on where functions are written in the code.	               A function that "remembers" and accesses variables from its lexical scope, even after the outer function has executed.
When                            it Happens	At compile time (when JavaScript determines variable scope).	                               At runtime (when the inner function is executed later).
Variable Access	                Inner functions can access variables from their parent function.	                                       Inner functions can still access parent function variables even after the parent function has finished execution.
Example                     	A function inside another function can access outer variables.                                             A returned function can still access variables from the function that created it, even after the outer function finishes.


 */

