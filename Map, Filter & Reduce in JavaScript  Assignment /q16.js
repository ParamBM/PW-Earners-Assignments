const productNames = ["Laptop", "Mouse", "Keyboard"];

const productCount = productNames.reduce((acc, cur) => ++acc, 0)

console.log(productCount);