class SBI_Customer {
  min_Bal = 500; //Property
  open_Account() {
    console.log("Accout Opened Successfully");
  }
  get_Statement() {}
  get_Balance() {}
  deposit() {}
  withdrawl() {}
  close_Account() {}
}
let c1 = new SBI_Customer();
console.log(c1.min_Bal);
c1.open_Account();
let c2 = new SBI_Customer();
console.log(c1.min_Bal);
c2.open_Account();
