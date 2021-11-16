let emp = {
  name: "Narasimha",
  sal: 45000,
  email: "greetlabs@gmail.com",
  loc: "BNG",
  Old_employeer: { companyName: "TCS" },
};
//console.log(emp.name);

//reading obj properties as variables
let { name, sal, Old_employeer } = emp;
console.log(Old_employeer.companyName);
