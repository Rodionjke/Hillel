// task 1
function createSum() {
    let sumOfNumbers = 0;

    return function (userNumbers) {
        sumOfNumbers += userNumbers;
        return sumOfNumbers;
    };
}

const finalResult = createSum();

console.log(finalResult(3));
console.log(finalResult(4));
console.log(finalResult(2));
console.log(finalResult(100));

// task 2

function multiplyValue(firstValue) {
    return (secondValue) => {
        return firstValue * secondValue;
    }
}

console.log(multiplyValue(5)(2));

//task 3


const result = function checkUserNumber() {
    let count = 0;
    let userInput = '';
    while (count < 10) {
        if (count === 0) {
            userInput = prompt('Please input a number which is more than 100');
        } else {
            userInput = prompt('Please input a correct number (should be more than 100)');
        }
        if (+userInput > 100) {
            return userInput;
        }
        count++;
    }
    alert("You've reached maximum tries without correct numbers")
}

console.log(`Your number is ${result()}`);
