/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let checkSet = new Set(nums);

    if(checkSet.size !== nums.length) return true;
    else return false
};

/**
 Problem
 - If the value contains duplicates, return true

 Test Case
 - [1,2,3,1] => true
 - [1,2,3,4] => false

 PsuedoCode
 - Use a set
 - if size of set is not equal to length of original nums, true, if equal (means all distinct), return false
 */