"use strict"

// task 1
class Calculator {

    add(firstDigit, secondDigit) {
        return firstDigit + secondDigit;
    }

    subtract(firstDigit, secondDigit) {
        return firstDigit - secondDigit;
    }

    multiply(firstDigit, secondDigit) {
        return firstDigit * secondDigit;

    }

    divide(firstDigit, secondDigit) {
        return firstDigit / secondDigit;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));

console.log(calc.subtract(10, 4));

console.log(calc.multiply(3, 6));

console.log(calc.divide(8, 2));

//task 2

class Coach {

    constructor(fullName, sportType, rating) {
        this.coachName = fullName;
        this.specialization = sportType;
        this.coachRating = rating;
    }

    displayInfo() {
        console.log(`Coach: ${this.coachName}, Specialization: ${this.specialization}, Rating: ${this.coachRating}`)
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();

coach2.displayInfo();

//task 3
class BankAccount {

    constructor(userMoney) {
        this.userTotalMoney = userMoney;
    }

    deposit(amountOfMoney) {
        this.userTotalMoney += amountOfMoney;
    }

    withdraw(amountOfMoney) {
        this.userTotalMoney -= amountOfMoney;
    }
getBalance() {
        return this.userTotalMoney;
}
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());