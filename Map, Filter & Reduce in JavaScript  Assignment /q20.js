const products = [ 
  { name: "Mouse", price: 500, quantity: 2 }, 
  { name: "Keyboard", price: 1000, quantity: 1 } 
];

// const totalPrice = products.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);

const total = products.reduce((acc, {price , quantity}) => acc + price * quantity, 0)

console.log(total);