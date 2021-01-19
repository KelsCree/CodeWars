// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
  let matches = []
  let sortedWord = word.split('').sort().join('')
  for (let i = 0; i < words.length; i++) {
    let sortedIndex = words[i].split('').sort().join('')
    sortedIndex == sortedWord ? matches.push(words[i]) : null
  }
  return matches
}