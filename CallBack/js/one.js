let employees = [
  {
    id: 1,
    first_name: "Bayard",
    email: "bnaseby0@blogtalkradio.com",
    gender: "Bigender",
    city: "Qarshi",
  },
  {
    id: 2,
    first_name: "Alphonse",
    email: "amcquirter1@paypal.com",
    gender: "Female",
    city: "Malusay",
  },
];

let getEmployee = () => {
  console.log("Hello");
  let tbody = document.getElementById("abc");
  employees.forEach((emp) => {
    let row = `<tr><td>${emp.id}</td>
      </tr>`;
    tbody.innerHTML += row;
  });
};
getEmployee();
