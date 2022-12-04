/*
We need to buy 30 phones and one phone is %119.95
And we need to pay the tax rate of 5%
So we multiply 30 * 119.95
We need to convert tax percentage into a decimal by moving the decimal point two spaces to the left
Then we need to Multiple the pre-tax value by the newly calculated decimal value in order to find the cost of the sales tax
And then we need to calculate the decimal value with the total cost of the 30 phones
*/

let onePhone = 119.95;
let weNeed = 30;
let taxPay = 5;
let allPhones = onePhone * weNeed;
let taxIndecimalConverted = 0.05;
let multiplierValueandTax = allPhones * taxIndecimalConverted;

console.log("Result is ","$", multiplierValueandTax + allPhones,);

//THE EXERCISE ON THE CLASS THAT WE HAD WITH THE CIRCLE

/*
Firs we find the first side (a)
Then we find the second side (b)
Then the area will be found by multipluing a * b
*/

let sideA = 7;
let sideB = 12;

let resultArea = sideA * sideB;
console.log("The result of the two sides is ", resultArea);