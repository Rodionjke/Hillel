//task 1

const userInput = prompt("Please input your symbols");
const symbolsToRemove = prompt("Please input symbols to remove. Uppercase symbols and lowercase symbols are different!");

function removeSymbols(userInput, symbolsToRemove) {
    const arrayOfSymbols = symbolsToRemove.split('');
    const arrayOfUserInput = userInput.split('');
    let newStringWithoutSymbols = [];

    for (let i = 0; i < arrayOfUserInput.length; i++) {
        let isNeedToRemove = false;

        for (let j = 0; j < arrayOfSymbols.length; j++) {
            if (arrayOfSymbols[j] === arrayOfUserInput[i]) {
                isNeedToRemove = true;
                break;
            }
        }
        if (!isNeedToRemove) {
            newStringWithoutSymbols.push(arrayOfUserInput[i]);
        }
    }
    return newStringWithoutSymbols.join('');
}

console.log(removeSymbols(userInput, symbolsToRemove));

//task 2

function doArithmeticMean(...userInputs) {
    let sumOfNumbers = 0;
    let count = 0;
    for (let arrayValues of userInputs) {
        if (typeof (arrayValues) === 'number') {
            count++
            sumOfNumbers += userValues;
        } else if (count === 0) {
            alert("No numbers in your input")
            break;
        }
    }
    const arithmeticMean = sumOfNumbers / count;
    return console.log(arithmeticMean);
}

doArithmeticMean(1, 3, 4, 10, 'pro', ['hello', 1, 2, 3]);

// task 3
const userArray = [0, 3, 5, 'for', '', 8];

function removeElement(userArray, arrayItem) {
    let newUserArray = [];
    for (let i = 0; i < userArray.length; i++) {
        let isNeedToRemove = false;
        if (arrayItem === userArray[i]) {
            isNeedToRemove = true;
        }
        if (!isNeedToRemove) {
            newUserArray.push(userArray[i]);
        }
    }
    return console.log(newUserArray);
}

removeElement(userArray, 3);
