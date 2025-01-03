

function outer(){
    let b=4;               // outside of the inner is the lexical and clausure of the inner method
    function inner(){    
        console.log(b);
    }

    return inner;      // not returning only function it is returing the clausure as well means b=4 okay
}


 outer()();

