const cart = [ 
  { name: "Laptop", quantity: 1 }, 
  { name: "Mouse", quantity: 2 } 
];

const quantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);

console.log(quantity);