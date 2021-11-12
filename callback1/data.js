let data = [
  { name: "Ravi", sal: 45000, loc: "Bangalore" },
  { name: "Raj Kumar", sal: 55000, loc: "Chennai" },
  { name: "Rahul", sal: 65000, loc: "New Delhi" },
];
let createEmployee = (employee, callback) => {
  setTimeout(() => {
    data.push(employee);
    callback();
  }, 4000);
};
let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    data.forEach((emp) => {
      rows =
        rows +
        `<tr><td>${emp.name}</td><td>${emp.loc}</td><td>${emp.sal}</td></tr>`;
    });
    document.getElementById("tdata").innerHTML = rows;
  }, 1000);
};
createEmployee(
  { name: "Priyanka Gandhi", sal: 85000, loc: "Noida" },
  getEmployee
);
