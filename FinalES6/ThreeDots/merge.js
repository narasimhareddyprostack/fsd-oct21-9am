let user = { name: "Ravi", loc: "Bangalore", email: "ravi@gmail.com" };
let details = { sal: 50000, email: "ravi@tcs.com" };
let user_Details = { ...user, ...details };

console.log(user_Details);
