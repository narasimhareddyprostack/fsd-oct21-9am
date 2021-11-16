class Tax {
  tax = 10;
}
class StateTax extends Tax {
  tax = 18;
}

let c1 = new StateTax();
console.log(c1.tax);
