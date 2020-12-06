// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?


// @param {number}
// @return {boolean}

var isPalindrome = function(x) {
  if (x < 0) return false
  let reversed = 0
  let number = x
  while (number > 0) {
      const lastDigit = number % 10
      reversed = (reversed * 10) + lastDigit
      number = (number / 10) | 0
  }
  return x === reversed
}