const calc = require('./calculation.js');

console.log('addition 5 + 10 = ', calc.add(5, 10));
console.log('subtract 25 - 2 = ', calc.subtract(25, 2));
console.log('multiply 13 * 22 = ', calc.multiply(13, 22));
console.log('divide 10 / 2 = ', calc.divide(12, 4));
console.log();

const Rate = 300;
const hoursWork = 4;
const daysPerWeek = 6;
const grossIncome = Rate * hoursWork * daysPerWeek;

console.log('Rate per hour', Rate);
console.log('Hours Worked', hoursWork);
console.log('Days per week', daysPerWeek);
console.log('Gross Income', grossIncome);
console.log();

const tax = calc.multiply(grossIncome, 0.1);
const sss = 1200;
const pagibig = 300; //24 total of work hours
const philhealth = 400;
const deductions = tax + sss + pagibig + philhealth;
const netSalary = calc.subtract(grossIncome, deductions);

console.log('Tax: ', tax);
console.log('SSS:', sss);
console.log('PAGIBIG:', pagibig);
console.log('PhilHealth: ', philhealth);
console.log('Deductions: ', deductions);
console.log();
console.log('Net Salary: ', netSalary);
