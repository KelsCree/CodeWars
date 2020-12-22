// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
  for(i = 0; i < nums.length; i++) {
      for(j = i+1; j < nums.length; j++) {
          if(nums[j] === target - nums[i]) {
            return [i, j]
          }
      }
  }
}
