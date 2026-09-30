const order = [ 
  { amount: 500 }, 
  { amount: 1000 }, 
  { amount: 750 } 
];

const total = order.reduce((total, price) => total + price.amount, 0);

console.log(total);