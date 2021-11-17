let employees = [
  { id: 101, name: "Rahul Gangdhi", sal: 45000 },
  { id: 102, name: "Priyanka Vadra", sal: 55000 },
];

let createEmployee = (emp) => {
  console.log("Test 1");
  let result = new Promise((resolve, reject) => {
    console.log("Test 2");
    setTimeout(() => {
      console.log("Test 3");
      employees.push(emp);
      getEmployee();
    }, 3000);
  });
};
let getEmployee = () => {
  console.log("Test 4");
  setTimeout(() => {
    let rows = "";
    employees.forEach((employee) => {
      rows += `<tr><td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.sal}</td>
      </tr>`;
    });
  }, 1000);
};

createEmployee({ id: 103, name: "Sonia Gandhi", sal: 50000 })
  .then((response) => {
      //process your response
  })
  .catch((err) => {
    console.log(err);
  });
