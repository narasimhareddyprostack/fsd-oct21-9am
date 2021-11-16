let emp = {
  name: "Ravi",
  get_Name: function () {
    return this.name;
  },
};

console.log(emp);
console.log(emp.name);
console.log(emp.get_Name());
