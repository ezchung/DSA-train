/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let length = nums.length
    for(let index in nums){
        let current = +index + 1
        while(current < length){
            if(nums[index] + nums[current] === target){
                return [+index, current]
            }
            current++;
        }
    }
};

/* 
 Problem: With the array of ints and a target number, find which two numbers add up to the target number

 Test Case
    [1,2,3,4,5], 4 => [0,2]
    [1,2], 3 => [0,1]
    [1,2,4,3], 3 => [0,1]

 Notes
    Each input would have exactly one solution. May not use the same element twice

 Write it out
    Take a look at the first number
        Take a look at the second number
            if the two add up to target number, return index

 Another approach can be 
    Take the number with each number subtract from the target and see if that number exists elsewhere
*/