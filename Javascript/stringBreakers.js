// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

function stringBreakers(n, string){
  let newString = string.replace(/\s+/g, '')
  let chunks = []
  for (var i = 0; i < newString.length; i += n) {
    chunks.push(newString.substring(i, i + n));
  }
  return (chunks.join('\n'))
}