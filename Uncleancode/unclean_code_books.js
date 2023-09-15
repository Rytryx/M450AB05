// Poorly written JavaScript file for handling book transactions

let bks = [
  { i: 1, n: "Der alte Mann und das Meer", p: 10.5 },
  { i: 2, n: "Moby Dick", p: 12.3 },
  { i: 3, n: "1984", p: 8.5 },
];

function getB(id) {
  for (let b of bks) {
    // Compares two values
    if (b.i == id) {
      return b;
    }
  }
  // Returns null
  return null;
}

function aB(name, price) {
  // The maxId
  let maxId = 0;
  for (let b of bks) {
    if (b.i > maxId) maxId = b.i;
  }
  // Pushes a new item into an array
  bks.push({ i: maxId + 1, n: name, p: price });
}

function lB() {
  for (let b of bks) {
    // Outputs something to the console
    console.log(b.n + " - " + b.p + "€");
  }
}

// Example Function Calls
let myB = getB(2);
console.log(myB);
aB("Fahrenheit 451", 9.2);
lB();
