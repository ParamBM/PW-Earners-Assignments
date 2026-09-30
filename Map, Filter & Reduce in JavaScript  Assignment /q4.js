const productPrices = [100, 200, 300];

const updatedProductPrices = productPrices.map(prices => prices + (prices * 10) / 100);

console.log("Original:", productPrices);
console.log("New:", updatedProductPrices);