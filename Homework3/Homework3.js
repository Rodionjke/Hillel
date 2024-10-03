// 1 task

let result = '';
for (let i = 20; i <= 30; i += 0.5) {
    result += i;
    if (i < 30) {
        result += ` `;
    }
}
console.log(result);

// 2 task

const dollarValue = 26;
for (let amountOfDollars = 10; amountOfDollars <= 100; amountOfDollars += 10) {
    console.log(`Вартісь ${amountOfDollars} долларів дорівнює ${dollarValue * amountOfDollars} гривень`)
}

// 3 task

const N = prompt('Enter your number');
if (isNaN(+N) || N === null || N.trim() === '') {
    alert("This is not a number");
} else {
    for (let number = 1; number <= 100; number++) {
        if (number * number <= +N) {
            console.log(number);
        } else {
            break
        }
    }
}


// 4 task
const userNumber = prompt('Enter your number');
if (isNaN(+userNumber) || userNumber === null || userNumber.trim() === '') {
    alert("This is not a number");
} else if (+userNumber < 2) {
    alert("This is not a simple number");
} else {
    let isSimpleNumber = true;
    for (let i = 2; i < +userNumber; i++) {
        if (+userNumber % i === 0) {
            isSimpleNumber = false;
            break;
        }
    }
    if (isSimpleNumber) {
        alert("This is simple number");
    } else {
        alert("This is not a simple number");
    }
}
