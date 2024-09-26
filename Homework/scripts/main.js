//1 task

const numberType = 10;
const bigNumberType = 11111111111111111111111111111111111111111111111111111111111111111n;
const stringType = "Hello World";
const booleanType = true;
const nullType = null;
let undefinedType;
const symbolType = Symbol('Hello World');
const objectType = {
    name: "Rodion",
    age: 30
};
const arrayType = [2, "2", true, {
    name: "Rodion"
}];
const functionType = function () {
};
console.log(typeof (numberType));
console.log(typeof (bigNumberType));
console.log(typeof (stringType));
console.log(typeof (booleanType));
console.log(typeof (nullType));
console.log(typeof (undefinedType));
console.log(typeof (symbolType));
console.log(typeof (objectType));
console.log(typeof (arrayType));
console.log(typeof (functionType));

//2 task

const firstUserMessage = prompt("Please, write first message");
const secondUserMessage = prompt("Please, write second message");
const thirdUserMessage = prompt("Please, write third (last) message");
console.log(`User's first message is "${firstUserMessage}". 
User's second message is "${secondUserMessage}" and 
User's third message is "${thirdUserMessage}"`);

// 3 task

const fiveDigitNumber = 32601;
const separatedDigits  = fiveDigitNumber.toString().split('').join(' ');
console.log(separatedDigits);