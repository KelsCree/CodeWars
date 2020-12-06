// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

// param {string} num1
// param {string} num2
// return {string}

var addStrings = function(num1, num2) {
  if (num1 === '0') return num2
  if (num2 === '0') return num1
  let output = []
  let num1Length = num1.length - 1
  let num2Length = num2.length - 1
  let carry = 0
  
  while (num1Length >= 0 || num2Length >= 0) {
      let addend1 = num1Length < 0 ? 0 : parseInt(num1[num1Length])
      let addend2 = num2Length < 0 ? 0 : parseInt(num2[num2Length])
      let sum = addend1 + addend2 + carry
      carry = Math.floor(sum / 10)
      output.push(sum % 10)
      num1Length--
      num2Length--
  }
  if (carry != 0) output.push(carry)
  return output.reverse().join('')    
};