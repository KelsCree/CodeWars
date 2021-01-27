// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
  let abc = "abcdefghijklmnopqrstuvwxyz".split('')
  let dictionary = {}
  for ( let i = 0; i < abc.length; i++) {
    dictionary[abc[i]] = i + 1
  }
  stringArray = string.split('')
  let values = stringArray.map(value => {
    return dictionary[value]
  })
  return values.reduce((acc, currentValue) => acc + currentValue, 0)
}