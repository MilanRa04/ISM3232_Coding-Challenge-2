// Task 1: Calculate the Tip

// Define bill and calculate tip based on bill amount using ternary operator
let bill = 275
let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);

// Task 2: Output bill, tip, and total

//Define total, then output the message with the bill, tip, and total.
let total = bill + tip
console.log(`The bill was $${bill}, the tip was $${tip}, and the total was $${total}`)