let price = 300;
let quantity = 10;

let originalBill = price * quantity;
let discount = (originalBill * 10) / 100;
let finalBill = originalBill - discount;

console.log("Original Bill :", originalBill);
console.log("Discount Amount :", discount);
console.log("Final Bill :", finalBill);