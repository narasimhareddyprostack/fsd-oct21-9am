var a = 100; // global
let b = 200; // global
function add() {
  let c = 300;
  b = 210;
  d = 400;
  console.log("Inside Add..." + b);
  function test() {
    let e = 500;
    console.log(e);
    console.log("Inside Test..." + b);
    console.log("a ...." + a);
    console.log("b...." + b);
  }
  test();
}
add();
console.log(a);
console.log(b);
//console.log(c);
console.log(d);//
//console.log(e);

