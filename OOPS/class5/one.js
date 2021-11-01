class A {
  constructor(a) {
    this.a = a;
    console.log("Class A Constructor");
  }
}

class B extends A {
  constructor(value) {
    super(value);
    this.a = value + 1;
    console.log("Class B constructor");
  }
}
let obj = new B(101);
console.log(obj);
