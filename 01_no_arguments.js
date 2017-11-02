const name = "Elon";

function sayName() {
    const message = "My name is " + name + ". This is regular function declaration";
    console.log(message);
}
sayName();

//Making a function declaration to a function Expression
const whatName = function() {
    const newMessage = "My name is " + name + ". This is a function expression";
    console.log(newMessage);
}
whatName();

//Making a function declaration to an Arrow function expression
const otherName = () => {
    const coolMessage = "My name is " + name + ". This is an Arrow function expression";
    console.log(coolMessage);
}
otherName();

//if only 1 line of code, don't need return key word or {} braces
const sayBye = () => console.log("Bye " + name);

sayBye();