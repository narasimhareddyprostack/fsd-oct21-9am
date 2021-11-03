const bcrypt = require("bcryptjs"); //ES5
//import bcrypt from 'bcrypt'; //ES6
let user = {
  userName: "Narasimha",
  email: "greetlabs@gmail.com",
  password: "1234567",
  cc: "1234567812345678",
};
//we have to use bcryptJs API
var salt = bcrypt.genSaltSync(10);
var newPassword = bcrypt.hashSync(user.password, salt);
var newEmail = bcrypt.hashSync(user.email, salt);
console.log(newPassword);
console.log(newEmail);

let newUser = { ...user, email: newEmail, password: newPassword };
console.log(newUser);

let result = bcrypt.compareSync("123456", newUser.password);
if (result) {
  console.log("Password Matching");
} else {
  console.log("Password is Not Matching");
}
