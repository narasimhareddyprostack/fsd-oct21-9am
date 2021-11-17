let employees = [
  { id: 101, name: "Rahul Gangdhi", sal: 45000 },
  { id: 102, name: "Priyanka Vadra", sal: 55000 },
];

let createEmployee = (emp, callback) => {
  setTimeout(() => {
    employees.push(emp);
    callback();
  }, 3000);
};
let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    employees.forEach((employee) => {
      rows += `<tr><td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.sal}</td></tr>`;
    });
    document.getElementById("tbody").innerHTML = rows;
  }, 1000);
};

createEmployee({ id: 103, name: "Sonia Gangdhi", sal: 65000 }, getEmployee);
