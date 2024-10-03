//1 task

const userName = prompt("Please, enter your name");
const userNameUpperLetter = userName[0].toUpperCase();
alert(`Hello, ${userNameUpperLetter}${userName.slice(1)}! How are you?`);

// 2 task

const userNumber = prompt('Please enter your 3-digit number');
if (userNumber.length !== 3) {
    alert("Number should be with 3 digits. Please reload this page and try again!");
} else if (+userNumber[0] === +userNumber[1] && +userNumber[1] === +userNumber[2]) {
    alert("All digits are same!")
} else if (+userNumber[0] === +userNumber[1] || +userNumber[1] === +userNumber[2] || +userNumber[0] === +userNumber[2]) {
    alert("Some of digits are same!");
} else {
    alert("All digits are different!");
}

// 3 task

const userYearOfBirth = prompt('Please enter your year of birth!');
if (userYearOfBirth === null) {
    alert("It's pity, you didn't want to tell me your year of birth");
} else if (+userYearOfBirth > 2024 || +userYearOfBirth < 1900) {
    alert("Haha! Nice joke! I don't believe you!");
} else {
    const userAge = 2024 - +userYearOfBirth;
    alert(`So, you are ${userAge} y.o!`);
}
const userCity = prompt('What city do you live in?');
if (userCity === null) {
    alert("It's pity, you didn't want to tell me your city");
} else if (userCity.toLowerCase() === "kyiv" || userCity === "kiev" || userCity === "киев" || userCity === "київ") {
    alert("Wow! You are living in the capital of Ukraine");
} else if (userCity.toLowerCase() === "london" || userCity === "лондон") {
    alert("Wow! You are living in the capital of Great Britain");
} else if (userCity.toLowerCase() === "washington" || userCity === "вашингтон" || userCity === "washington d.c.") {
    alert("Wow! You are living in the capital of USA");
} else {
    alert(`Cool! You are living in ${userCity}`);
}
const userFavoriteSport = prompt('What is your favorite sport?');
if (userFavoriteSport === null) {
    alert("It's pity, you didn't want to tell me your favorite sport");
} else if (userFavoriteSport.toLowerCase() === "box" || userFavoriteSport.toLowerCase() === "бокс") {
    alert("Wow! You want to be like Oleksandr Usyk?");
} else if (userFavoriteSport.toLowerCase() === "football" || userFavoriteSport.toLowerCase() === "футбол") {
    alert("Wow! You want to be like Cristiano Ronaldo?");
} else if (userFavoriteSport.toLowerCase() === "basketball" || userFavoriteSport.toLowerCase() === "баскетбол") {
    alert("Wow! You want to be like Lebron James?");
} else {
    alert(`Cool! Good luck in ${userFavoriteSport}`);
}

// 4 task

let numOrStr = prompt("input number or string");
console.log(numOrStr)
switch (true) {
    case numOrStr === null:
        console.log('Ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}