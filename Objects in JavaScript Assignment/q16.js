const user = { 
  name: "Rahul", 
  role: "student" 
};

const updatedUser = { 
    ...user, 
    role: "developer"
};

console.log(updatedUser);