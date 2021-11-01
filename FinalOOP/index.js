class Bank {
  min_Bal = 500;
  constructor(a, b, c, d) {
    this.house_No = a;
    this.area = b;
    this.city = c;
    this.state = d;
  }
  get_Address() {
    return this.city;
  }
}
class Saving_Acc extends Bank {
  constructor(acc_No, acc_Name, amount, house_No, area, city, state) {
    super(house_No, area, city, state);
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
    this.amount = amount;
    console.log("Savings Account Constructor");
  }
  open_Account() {}
  deposit(value) {
    this.amount = this.amount + value;
    return false;
  }
  get_Statement() {}
  withdrawl() {}
  close_Account() {}
  get_Balance() {
    return this.amount;
  }
}

let r1 = new Saving_Acc(
  101,
  "Ravi",
  5000,
  96,
  "Marathahalli",
  "Bangalore",
  "KA"
);

console.log(r1.get_Balance());
console.log(r1.deposit(6000));
console.log(r1.deposit(6000));
console.log(r1.get_Balance());
class Salary_Acc extends Bank {
  min_Bal = 0;
}
let v1 = new Salary_Acc();

/* console.log(v1); */
