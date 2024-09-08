// Task 1: Calculate the Tip

// Define bill and calculate tip based on bill amount using ternary operator
let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);

// Task 2: Output bill, tip, and total

// Define total, then output the message with the bill, tip, and total.
let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total was $${total}`);

// Task 3: Create calculateTip function

// Create a function to calculate the tip of any bill
function calculateTip(bill) {
    return (bill >=50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
}

let testBill = 100;
let testTip = calculateTip(testBill);
console.log(`The tip for a bill of $${testBill} is $${testTip}`);

// Task 4 and 5: Utilize arrays and Test Data

// Data Set 1
const bills1 = [275, 40, 430];
const tips1 = bills1.map(bill => calculateTip(bill));
const totals1 = bills1.map((bills1, index)=> bill +tips1[index]);

// Output resutls for Data Set 1
console.log('Data Set 1:');
bills1.forEach((bill, index) => {
    console.log(`The bill was $${bill}, the tip was $${tips1[index]}, and the total value is $${totals1[index]}`);
})

// Data Set 2
const bills2 = [125, 555, 44];
const tips2 = bills2.map(bill => calculateTip(bill));
const totals2 = bills2.map((bills2, index)=> bill +tips2[index]);

// Output resutls for Data Set 2
console.log('Data Set 2:');
bills2.forEach((bill, index) => {
    console.log(`The bill was $${bill}, the tip was $${tips2[index]}, and the total value is $${totals2[index]}`);
})