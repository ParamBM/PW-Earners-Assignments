let users = [ 
  { name: "Rahul", age: 20 }, 
  { name: "Priya", age: 22 } 
];

let res = users.findIndex((user) => user.name === "Priya");

console.log(res);