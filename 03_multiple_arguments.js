//Before
function multiply(x, y) {
    return x * y;
}
//After
//if only 1 line of code, don't need return key word or {} braces
const newMultiply = (x, y) => x * y;

function add(a, b) {
    return a + b;
}

const newAdd = (x, y) => a + b;

function subtract(a, b) {
    return a - b;
}
//or leave it like this
const newSubtract = (x, y) => {
    return a - b;
}