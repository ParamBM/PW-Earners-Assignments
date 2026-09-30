const productPrices = [500, 1200, 300];

const totalPrice = productPrices.reduce((acc, cur) => acc + cur, 0)

console.log(totalPrice);