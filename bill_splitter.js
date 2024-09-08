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