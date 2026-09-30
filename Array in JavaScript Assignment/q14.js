let users = [ 
  { name: "Rahul", age: 20 }, 
  { name: "Priya", age: 22 } 
];

// let res = users.find((user) => {
//     if(user.name === "Rahul") {
//         return user;
//     }
// });

let res = users.find((user) => user.name === "Rahul" );

console.log(res);