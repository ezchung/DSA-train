/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) left = mid+1;
        if(nums[mid] > target) right = mid-1;
    }
    return -1;
};

/**
Problem
with array, find index of target. Else return -1

Notes

Code
left = 0
right = nums.length
while(left <= right)
    mid is Math.floor(left+right/2)
    chosen is nums[mid]

    check if chosen is equal to target
    if true, return mid

    if chosen is less than target
    reassign left to equal mid+1

    chosen is greater than ra
    reasign right to equal mid-1
return -1
*/