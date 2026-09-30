const users = [ 
  { name: "Rahul", role: "student" }, 
  { name: "Priya", role: "student" } 
];

const updatedUsers = users.map((user) => {
    return {
        ...user,
        role: "developer"
    }
})

console.log(users);
console.log(updatedUsers);