let student = "Param";
let rollNumber = 33;
let mathMarks = 56;
let scienceMarks = 65;
let englishMarks = 35;

let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = (totalMarks / 300) * 100;
let grade;
let result = "PASS";

if (percentage < 0 || percentage > 100) {
    console.log("Invalid Percentage");
} else if (percentage >= 90 && percentage <= 100) {
    grade = "A";
} else if (percentage >= 80 && percentage <= 89) {
    grade = "B";
} else if (percentage >= 70 && percentage <= 79) {
    grade = "C";
} else if (percentage >= 60 && percentage <= 69) {
    grade = "D";
} else if (percentage >= 40 && percentage <= 59) {
    grade = "E";
} else {
    grade = "F";
}

if (mathMarks < 40 || scienceMarks < 40 || englishMarks < 40) {
    result = "FAIL";
}

console.log("Name : ", student);
console.log("Roll No : ", rollNumber);
console.log("Maths : ", mathMarks);
console.log("Science : ", scienceMarks);
console.log("English : ", englishMarks);
console.log("Total : ", totalMarks);
console.log("Percentage : ", percentage);
console.log("Grade : ", grade);
console.log("Result : ", result);