class Bank {
  min_Bal = 500;

  constructor(acc_No, acc_Name, amount) {
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
    this.amount = amount;
  }
  open_Account() {
    console.log("Mr" + this.acc_Name + "Account Opend Successfully");
  }
  deposit() {}
  withdraw() {}
  get_Statement() {}
}
let c1 = new Bank(101, "Ravi", 5000);
console.log(c1);
//c1.constructor();
c1.open_Account();
c1.open_Account();
c1.open_Account();
let c2 = new Bank(102, "Kiran", 10000);
console.log(c2);
c2.open_Account();
