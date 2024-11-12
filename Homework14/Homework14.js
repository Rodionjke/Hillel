function Student(fullName, birthday) {
    const parts = fullName.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
    this.birthday = birthday;
    this.marks = [];
    this.userAttendanceAtLessons = [];


    this.addMarks = function (...userMarks) {
        if (this.marks.length + userMarks.length <= 25) {
            this.marks.push(...userMarks);
        } else {
            console.log("Student cannot reach more than 25 marks");
        }
    };


    this.userWasPresent = function () {
        if (this.userAttendanceAtLessons.length < 25) {
            this.userAttendanceAtLessons.push(true);
        } else {
            console.log("Student cannot reach more than 25 attendances");
        }
    };

    this.userWasAbsent = function () {
        if (this.userAttendanceAtLessons.length < 25) {
            this.userAttendanceAtLessons.push(false);
        } else {
            console.log("Student cannot reach more than 25 attendances");
        }
    };

    this.getUserAge = function () {
        const dayOfBirth = new Date(birthday);
        const dateToday = new Date();

        let age = dateToday.getFullYear() - dayOfBirth.getFullYear();

        if (dateToday.getMonth() < dayOfBirth.getMonth() || (dateToday.getMonth() === dayOfBirth.getMonth() && dateToday.getDate() < dayOfBirth.getDate())) {
            age--;
        }
        return age;
    }
    this.getAverageUserMark = function () {
        if (this.marks.length === 0) return `This students has no marks yet`;
        const sumOfMarks = this.marks.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        return sumOfMarks / this.marks.length;
    };

    this.summaryOfStudy = function () {
        const lessonsAttended = this.userAttendanceAtLessons.filter(attendance => attendance === true).length;
        const allLessonsCount = this.userAttendanceAtLessons.length;
        const averageMark = this.getAverageUserMark();

        if (averageMark > 90 && lessonsAttended / allLessonsCount > 0.9) {
            return `Good Job!`;
        } else if (averageMark < 90 && lessonsAttended / allLessonsCount < 0.9) {
            return `Your study was not good`;
        } else {
            return `You can do better`;
        }
    };

    this.age = this.getUserAge();
}

const JohnWick = new Student('John Wick', '1994-01-01');
JohnWick.addMarks(100, 100, 100, 100, 100, 100, 100, 90, 90, 90, 100, 100, 100, 100, 100, 100, 100, 90, 90, 90, 85, 90, 30, 25, 100);
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasAbsent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasAbsent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasAbsent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasAbsent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasAbsent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();
JohnWick.userWasAbsent();
JohnWick.userWasPresent();
JohnWick.userWasPresent();

console.log(JohnWick.userAttendanceAtLessons);
console.log(JohnWick.firstName);
console.log(JohnWick.lastName);
console.log(JohnWick.birthday);
console.log(JohnWick.age);
console.log(JohnWick.getAverageUserMark());
console.log(JohnWick.summaryOfStudy());


const JuliaRoberts = new Student('Julia Roberts', '1986-02-01');
JuliaRoberts.addMarks(100, 100, 100, 100, 60, 100, 100, 80, 90, 90, 100, 60, 100, 100, 90, 100, 100, 90, 90, 90, 85, 90, 30, 25, 100);
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasAbsent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasAbsent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasAbsent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasAbsent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasAbsent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasAbsent();
JuliaRoberts.userWasPresent();
JuliaRoberts.userWasPresent();
console.log(JuliaRoberts.userAttendanceAtLessons)
console.log(JuliaRoberts.firstName);
console.log(JuliaRoberts.lastName);
console.log(JuliaRoberts.birthday);
console.log(JuliaRoberts.age);
console.log(JuliaRoberts.getAverageUserMark());
console.log(JuliaRoberts.summaryOfStudy());

const LebronJames = new Student('Lebron James', '1977-10-10');
LebronJames.addMarks(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100);
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
LebronJames.userWasPresent();
console.log(LebronJames.userAttendanceAtLessons)
console.log(LebronJames.firstName);
console.log(LebronJames.lastName);
console.log(LebronJames.birthday);
console.log(LebronJames.age);
console.log(LebronJames.getAverageUserMark());
console.log(LebronJames.summaryOfStudy());
