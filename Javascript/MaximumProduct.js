// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  return Math.max(...array.slice(0, -1).map((n, i) => n * array[i + 1]))
}