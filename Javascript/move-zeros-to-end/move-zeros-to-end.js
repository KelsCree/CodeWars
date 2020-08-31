// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

let moveZeros = function (arr) {
    const zero_arr = arr.filter(num => num !== 0)
    const other_arr = arr.filter(num => num === 0)
    return zero_arr.concat(other_arr)
    }