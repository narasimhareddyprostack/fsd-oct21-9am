let cars = [
  { name: "Hyndai", Model: "Venue", price: 1000000 },
  { name: "Hyndai", Model: "Creta", price: 2000000 },
  { name: "Hyndai", Model: "I20", price: 800000 },
  { name: "VW", Model: "Polo", price: 1100000 },
  { name: "Skoda", Model: "Rapid", price: 1200000 },
  { name: "BMW", Model: "X1", price: 3500000 },
  { name: "RR", Model: "Equoqe", price: 6000000 },
];

/* let offer_Cars = [];
for (let i = 0; i <= cars.length - 1; i++) {
  if (cars[i].price <= 1000000) {
    offer_Cars.push(cars[i]);
  }
} */
/* let offer_Cars = cars.filter((car) => {
  return car.price <= 1000000;
}); */
let offer_Cars = cars.filter((car) => car.price <= 1000000);
console.log(offer_Cars);
