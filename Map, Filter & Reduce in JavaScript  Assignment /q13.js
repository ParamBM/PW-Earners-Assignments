const users = [ 
  { name: "Rahul", isActive: true }, 
  { name: "Priya", isActive: false } 
];

const activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);