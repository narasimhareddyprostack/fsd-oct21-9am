let employee_Data = [
  { id: 101, name: "Rahul Gangdhi", sal: 45000 },
  { id: 102, name: "Priyanka Vadra", sal: 55000 },
];
let createEmployee = (new_Emp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      employee_Data.push(new_Emp);
      let flag = true;
      flag ? resolve() : reject("Unable to insert New Employee");
    }, 3000);
  });
};
let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    employee_Data.forEach((emp) => {
      rows += `<tr><td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.sal}</td>
      <tr>`;
    });
    document.getElementById("tbody").innerHTML = rows;
  }, 1000);
};
createEmployee({ id: 103, name: "Sonia Gandhi", sal: null })
  .then(() => {
    getEmployee();
  })
  .catch(() => {});
