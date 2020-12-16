// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
  const array = str.split('')
  let result = []
    for(i = 0; i < array.length; i+=2) {
      if (array[i] && array[i+1]) {
        result.push(array[i] + array[i+1])
      }
      else {
        result.push(array[i] + '_')
      }
    }
  return result
}