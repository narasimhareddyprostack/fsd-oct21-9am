class Tax {
  tax = 5;
}

class KATax extends Tax {
  tax = 5 + 10;
  ka_Tax = 24;
}
let t = new KATax();
console.log(t.tax);

class GOA extends KATax {}
let g = new GOA();
console.log(g.ka_Tax);
