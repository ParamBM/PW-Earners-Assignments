let balance = 235;
let withdrawAmount = 30;
let deposit = 300;
let choice = 4;

switch (choice) {
    case 1:
        console.log("Current Balance :", balance);
        break;
    case 2:
        if (deposit > 0) {
            balance += deposit;
            console.log("Money Deposit Successful");
            console.log("New Balance :", balance);
        } else {
            console.log("Invalid Deposit Amount");
        }
        break;
    case 3:
        if (withdrawAmount <= 0) {
            console.log("Invalid Withdraw Amount");
        } else if (withdrawAmount > balance) {
            console.log("Insufficient Balance");
        } else {
            let remaining = balance - withdrawAmount;

            console.log("Withdrawal successful");
            console.log("Remaining balance:", "₹" + remaining);
        }
        break;
    case 4:
        console.log("Thanks for using the ATM");
        break;
    default:
        console.log("Invalid Choice");
}

