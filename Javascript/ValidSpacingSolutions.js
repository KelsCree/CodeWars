// Your task is to write a function called valid_spacing() or validSpacing() which returns a string with valid spacing.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. 

function validSpacing(s) {
  let array = s.split('')
  console.log(array)
    if (array.length > 1 && array[0] == ' ') {
      return false
    }
    else if (array.length > 1 && array[array.length-1] == ' ') {
      return false
    }
    else if ((/\s\s+/g).test(s))  {
      return false
    }
    else if (array.join(" ") == ' ') {
      return false
    }
    else if (array.includes('   ')) {
      return false
    }
    else {
      return true
    }
  }