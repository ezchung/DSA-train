/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
};

/**
Problem


Notes
We have to check if the array is in correct order. sorted but not in order
    can i use binary search with this and rotate it
    find the start or end
    if greater than number on left but greater than number on right
        then the number on   is the start
    if in the correct position,
        ie middle number is greater than left and less than right
        pass in recursive function
        takes each half and finds out where the minimum is.

Code
using binary search
let res
let leftP = 0, rightP = nums.length-1
while(leftP <= rightP)
    let mid = Math.floor((left+right)/2)
    let leftNum = nums[mid-1] || NaN
    let rightNum = nums[mid+1] || NaN
    if(nums[mid] > leftNum && nums[mid] > rightNum)
        return rightNum
    if(nums[mid] > leftNum && nums[mid] < rightNum)
        recursive()


recursive function
baseCase
    if(nums[mid] > leftNum && nums[mid] > rightNum)
        return rightNum
    else
        recursive()
*/