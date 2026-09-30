let balance = 235;
let withdrawAmount = 30;

if (withdrawAmount <= 0) {
    console.log("Invalid Withdraw Amount");
} else if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
} else {
    let remaining = balance - withdrawAmount;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", "₹" + remaining);
}