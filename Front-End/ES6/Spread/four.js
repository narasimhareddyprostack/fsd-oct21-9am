let user = { name: "Ravi", email: "greetlabs@gmail.com" };
let details = { email: "ravi@tcs.com", password: "123123" };

let userDetails = { ...user, ...details };
console.log(userDetails);
