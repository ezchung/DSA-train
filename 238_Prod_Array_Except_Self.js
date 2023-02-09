/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
};

/**
 * Problem
 * - Return an array of nums where each num is the product of all the other elements 
 * except the current num.
 * - answer[i] is the product of all the elements of nums except nums[i]
 * 
 * Notes
 * - Runtime: O(n)
 * - dont use division operation
 * 
 * Code
 * Without O(n) restriction
 *  Iterate through the nums array
 *      multiply and pass in the value to the returning array
 * 
 * With O(n) restriction
 * assign 1 to each in returning list
 * iterate through and multiply to array whenever the index is not currently on them
 */