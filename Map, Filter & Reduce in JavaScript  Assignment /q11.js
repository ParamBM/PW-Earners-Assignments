const users = [ 
  { name: "Rahul", role: "developer" }, 
  { name: "Priya", role: "student" } 
];

const developers = users.filter(user => user.role === "developer");

console.log(developers);