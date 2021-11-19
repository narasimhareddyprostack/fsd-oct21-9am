function cart() {
  var counter = 0;
  function incrCounter() {
    counter += 1;
    console.log("Hello,GM" + counter);
  }
  function decrCounter() {
    counter -= 1;
  }
  function getCounter() {
    return counter;
  }
  return { incr: incrCounter, decr: decrCounter, count: getCounter };
}
let c_Obj = cart();
console.log(c_Obj);
c_Obj.incr();
c_Obj.decr();
c_Obj.incr();
c_Obj.incr();
console.log(c_Obj.count());
