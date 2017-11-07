let range = function (start, stop){
    var n = [];
    for(var i = start; i < stop; i++){
     n.push(i);
    }
    return n;
}
let factorial = n => {
    return (range(1, n+1).reduce((x,y) => x * y, 1))
}

console.log(factorial(3))
