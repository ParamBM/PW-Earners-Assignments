const users = [ 
  { name: "Rahul", email: "rahul@example.com" }, 
  { name: "Priya", email: "priya@example.com" } 
];

const userNames = users.map(name => name.name);

console.log(userNames);