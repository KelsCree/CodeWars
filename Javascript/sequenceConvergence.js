// Consider the following series:

// 1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122

// It is generated as follows:

// For single digit integers, add the number to itself to get the next element.
// For other integers, multiply all the non-zero digits and add the result to the original number to get the next element.
// For example: 16 + (6 * 1) = 22 and 104 + (4 * 1) = 108.

// Let's begin the same series with a seed value of 3 instead of 1:

// 3, 6, 12, 14, 18, 26, 38, 62, 74, 102, 104, 108, 116, 122

// Notice that the two sequences converge at 26 and are identical therefter. We will call the series seeded by a value of 1 the "base series" and the other series the "test series".




function convergence(n){
  let total = n
  let iterations = []
  let addend = 0
  while (iterations.includes(26) === false) {
  if (total.toString().length > 1) {
    let split = total.toString().split('')
    for (let j = 0; j < split.length; j++) {
      if (split[j] !== 0) {
      addend = addend * (parseInt(split[j]))
      }
    }
    total += addend
    iterations.push(total)
    }
  else {
    total += total
    iterations.push(total)
    }
    console.log(total, iterations)
  }
    return (iterations.length - 1)
}