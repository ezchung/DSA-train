/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let products = [];

    let prefix = 1;
    let postfix = 1;
    for(let i = 0; i < nums.length; i++){
        products[i] = prefix;
        prefix *= nums[i];
    }
    for(let j = nums.length-1; j >= 0; j--){
        products[j] *= postfix;
        postfix *= nums[j]
    }
    return products;
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
 * 
 * Create two for loops
 * Start from left and multiply up
 * Another start from right and multiply going down
 *  Both to the same array
 * This will build up and multiply on the way down.
 * 
 * Start PsuedoCode
 * create left value keep it natural as 1
 * create right value
 * create prefix array
 * create postfix array
 * for prefix array
 * iterate through array
 *  multiply by prefix and multiply by index-1
 * 
 * 
 * Non-O(n) memory solution
 * create prefix variable = 1
 * create postfix variable = 1
 * create returning array
 *  map everything in returning array to 1
 * iterate through array
 *  returnArray[currIdx] = prefix
 *  prefix = prefix * nums[currIdx]
 * iterate through array from back
 *  returnArray[currIdx] = postfix * returnArr[currIdx]
 *  postfix = postfix * nums[currIdx]
 * 
 * Notes
 * Multiplying every single number except for itself
 *  Every other value
 * Get every value before itself in first loop
 * Get every value after itself for second loop
 * 
 * 
 */