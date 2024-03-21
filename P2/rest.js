// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 5));

// ===============================================
// rest
function sum(...numbers) {
  let hasil = 0;
  for (const number of numbers) {
    hasil = hasil + number;
  }
  // return numbers;
  console.log(hasil);
}

sum(10, 5, 9, 6, 8, 7);
// ===============================================
