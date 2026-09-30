let num1 = 34;
let num2 = 53;
let num3 = 23;

if (num1 > num2 && num1 > num3) {
    console.log(num1, "is largest.");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2, "is largest.");
} else if (num3 > num1 && num3 > num2) {
    console.log(num3, "is largest.");
} else {
    console.log("All numbers are equal.");
}