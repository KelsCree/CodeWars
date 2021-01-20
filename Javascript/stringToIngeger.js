// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, 231 − 1 or −231 is returned.

var myAtoi = function(str) {
    
  let i = 0;
  let sign = 1;
  let result = 0;
  
  while (i < str.length && str[i] == ' ') i++
  
  if (i < str.length && (str[i] == '+' || str[i] == '-')) {
    sign = (str[i] == '-') ? -1 : 1;
    i++
  }

  const MAX_SAFE_32_INT = Math.pow(2,31) - 1
  const MIN_SAFE_32_INT = -Math.pow(2,31)
  
  while (i < str.length && str[i].match(/[0-9]/) != null) {
    if (result > Math.floor(MAX_SAFE_32_INT / 10) ||
        (result === Math.floor(MAX_SAFE_32_INT / 10) && num > MAX_SAFE_32_INT % 10)) {
          return (sign === 1) ? MAX_SAFE_32_INT : MIN_SAFE_32_INT;
      }
  
    result = result * 10 + num;
    i++
  }
  return result * sign;
};