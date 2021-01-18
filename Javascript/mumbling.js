// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//one line solution
function accum(s) {
  return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
}

//longer solution
function accum(s) {
	let array = s.split('')
  let newArray = array.map((char, index) => {
    return char.toUpperCase() + char.toLowerCase().repeat(index)
  })
  return newArray.join("-")
}