// task 1
const userInformation = {
    userName: 'John',
    userAge: 21,
    userCountry: 'USA',
    getUserInfo: function () {
        return `Користувач ${this.userName}, йому ${this.userAge} років і він/вона проживає у ${this.userCountry}`;
    }
}
console.log(userInformation.getUserInfo());

// task 2

const arrayOfNumbers = [2, 5, 7, 8];

function getEvenNumbers(numbers) {
    return numbers.reduce(function (prevValue, currentValue) {
        if (currentValue % 2 === 0) {
            prevValue.push(currentValue);
        }
        return prevValue;
    }, [])
}

console.log(getEvenNumbers(arrayOfNumbers));

// task 3
const userContactBook = {
    contacts: [
        {name: 'John', phoneNumber: 123456, email: 'john@gmail.com'},
        {name: 'Peter', phoneNumber: 568456, email: 'peter@gmail.com'},
        {name: 'Jessica', phoneNumber: 1456879, email: 'jessica@gmail.com'},
        {name: 'Parker', phoneNumber: 1548963, email: 'parker@gmail.com'},
        {name: 'Parker', phoneNumber: 111111648, email: 'parker2@gmail.com'}],
    getContact: function (userName) {
        const names = this.contacts.filter(function (item) {
            return userName.toLowerCase() === item.name.toLowerCase();
        });
        if (names.length === 0) {
            return `Sorry but there is no user with name ${userName} in your book`
        }
        return names;
    },
    getNewContact: function (userName, userNumber, userEmail) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (userName.toLowerCase() === this.contacts[i].name.toLowerCase() && userNumber === this.contacts[i].phoneNumber) {
                return `You already have this person in your book`
            }
        }
        let newUser = {name: userName, phoneNumber: userNumber, email: userEmail};
        this.contacts.push(newUser);
        return newUser;
    }
}
console.log(userContactBook.getContact('parker'))
console.log(userContactBook.getNewContact('Robert', 39393939, 'robert@gmail.com'))
console.log(userContactBook.contacts)