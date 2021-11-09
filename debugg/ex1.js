let emp = { name: "Ravi", sal: 45000, is_Avail: true };
//how to find given object is empty object or not?
let result = Object.keys(emp);
console.log(result.length);
let b = {};
Object.keys(b).length === 0 ? console.log("Yes") : console.log("No");
