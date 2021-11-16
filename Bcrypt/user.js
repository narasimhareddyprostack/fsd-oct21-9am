//import bcrypt from 'bcrypt'; //ES6
const bcrypt = require("bcrypt");

let user = { email: "Ravi@tcs.com", password: "123@123" };

let salt = bcrypt.genSaltSync(10);
let new_Password = bcrypt.hashSync(user.password, salt);
console.log(new_Password);
let new_User = { ...user, password: new_Password };
console.log(new_User);
