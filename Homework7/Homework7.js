const companyName = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals:[{name: 'Jack', salary: 1300}],
    }
}

function getSumOfSalary(company) {
    let sumOfSalary = 0;
    for (const key in company) {
        if (Array.isArray(company[key])) {
            sumOfSalary += company[key].reduce(function (prevValue, currentValue) {
                return prevValue + currentValue.salary
            }, 0);
        } else if (typeof company[key] === 'object' && company[key] !== null) {
            sumOfSalary += getSumOfSalary(company[key]);
        }
    }
    return sumOfSalary;
}

console.log(getSumOfSalary(companyName));