function largestOfTwo(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else if(num2 > num1) {
        return num2;
    } else {
        return console.log("Both are equal");
    }
}


console.log(largestOfTwo(4, 4));