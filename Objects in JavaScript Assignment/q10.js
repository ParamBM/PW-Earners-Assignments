const user = { 
  name: "Rahul", 
  email: "rahul@example.com" 
};


Object.entries(user).forEach(property => {
    const [ key , value ] = property
    console.log(`${key}: ${value}`);
});

// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });