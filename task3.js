function sum (a) {
    
    return function (b) {
        return  a + b;
    }
}


console.log( sum(5)(0), sum(3)(2), sum(-5)(10) );