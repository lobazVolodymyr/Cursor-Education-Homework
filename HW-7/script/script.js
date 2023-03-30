const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {

    return this.tax * salary;

}

console.log(getMyTaxes.call(ukraine, 1500));

function getMiddleTaxes() {

    return this.middleSalary * this.tax;

}

console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes() {

    return this.middleSalary * this.tax * this.vacancies; 
    
}

console.log(getTotalTaxes.call(ukraine));

function getMySalary() {

    const mySalary = {};
    mySalary.salary =Math.floor( Math.random()*(2000 - 1500)+1500);
    mySalary.taxes = this.tax * mySalary.salary;
    mySalary.profit = mySalary.salary - mySalary.taxes;
    console.log(mySalary);
   
}

const interval = setInterval(( ()=> getMySalary.call(ukraine) ), 10000);