let age = 25;
let hasLicense = false;

if (age < 0) {
    console.log("Invalid Age.");
} else if (age >= 18 && age <= 60 && hasLicense) {
    console.log("You can drive.");
} else {
    console.log("You can not drive.");
}