/**
 * Spread = untuk memisahkan array atau object menjadi 1 item (single value)
 * notasinya titik tiga (...)
 */

// ================================================
// Spread Array
const fruits = ["Apel", "Anggur"];

const newFruits = [...fruits,"Mangga", "Lemon"];

// console.log(...fruits);
// console.log(newFruits);

// ================================================
// Spread Object

const user = {
  name : "Budi Santoso",
  major : "Informatika"
}

const newUser = {
  ...user,
  age : 20
}

console.log(newUser);

// ================================================
