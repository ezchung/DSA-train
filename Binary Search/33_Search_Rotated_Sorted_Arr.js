/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
};

/* 
Problem
Sorted but rotated. So start is at random point of array.
- return the index that the target number exists

Notes
- O(logN)
    - So cannot go through everything.
    - meaning if i want to find min first, would not work as I would possibly go through O(N)

Idea
Using binary search:
"Thinking of the recursive case"
    get mid if mid = target
        if left, return mid + 0;
        if right, return mid + 1
    split into halves
    if target exists between the first of one half and last of the same half, 
        continue splitting
        binarySearch(nums.slice(0,mid), target, "left", count)
        binarySearch(nums.slice(mid), target, "right", count)

    
    


Pseudo


*/