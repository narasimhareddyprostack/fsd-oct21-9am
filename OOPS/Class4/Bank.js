class Address {
  constructor(a, b, c, d) {
    this.house_No = a;
    this.area = b;
    this.city = c;
    this.state = d;
    console.log("Inside Address class Constructor");
  }
}

class Sbi_Customer {
  constructor(a, acc_Name, amout, b) {
    this.acc_No = a;
    this.acc_Name = acc_Name;
    this.amout = amout;
    this.b = b;
    console.log(this.b);
  }
}
/* let c1 = new Sbi_Customer(
  101,
  "Ravi",
  5000,
  new Address("#56", "Marathahalli", "Bangalore", "KA")
); */
let c1 = new Sbi_Customer(101, "Ravi", 5000);

class Sbi_CC {}
let cc1 = new Sbi_CC(5678, new Address("#56", "Marathahalli", "KA"));
