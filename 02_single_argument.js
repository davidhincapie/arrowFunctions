//With a single argument to an Arrow function expression
function square(x) {
    return x * x;
}

//Remove () only on single argument functions
//if only 1 line of code, don't need return key word or {} braces
const newSquare = x => x * x;


function cube(x) {
    return square(x) * x;
}

const newCube = x => {
    return square(x) * x;
}