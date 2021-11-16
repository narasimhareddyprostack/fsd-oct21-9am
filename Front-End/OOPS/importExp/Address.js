class Address {
  constructor(h_No, area, state) {
    this.h_No = h_No;
    this.area = area;
    this.state = state;
  }
}
let Tax = 18;
// export default Address; // ES6 Notation
module.exports = {Address, Tax};
