const products = [ 
  { name: "Laptop", inStock: true }, 
  { name: "Mouse", inStock: false } 
];

const filteredProducts = products.filter(product => product.name && product.inStock === true);

console.log(filteredProducts);