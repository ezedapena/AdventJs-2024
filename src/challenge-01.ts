// Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the elves.

// Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the elves.
// Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.

function prepareGifts(gifts: number[]): number[] {
  const uniqueGifts = Array.from(new Set(gifts)).sort((a, b) => a - b);
  return uniqueGifts;
}

// Ejemplo 1
const gifts1: number[] = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

// Ejemplo 2
const gifts2: number[] = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

// Ejemplo 3 (se declara explícitamente el tipo)
const gifts3: number[] = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía
