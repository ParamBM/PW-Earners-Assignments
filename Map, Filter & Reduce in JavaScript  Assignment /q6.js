const products = [ 
  { name: "Laptop", price: 50000 }, 
  { name: "Mouse", price: 500 } 
];

const stockProducts = products.map(items => ({
    ...items,
    inStock: true
}))

console.log(stockProducts);