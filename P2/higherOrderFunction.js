/**
 * filter()
 * map()
 * reduce()
 */

/**
 * filter
 * mencari angka > 3
 */

const filterNumber = numbers.filter((number) =>  number > 3);
// console.log(filterNumber);

/**
 * map
 * setiap angka dikalikan 2
 */

const mapNumber = numbers.map((number) => number * 2);
// console.log(mapNumber);

/**
 * reduce
 * 
 */

const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// accumulator nilai hasil operator
// currentValue nilai saat ini
console.log(sum);
