/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
};

/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
 */

/**
Problem
Reorganize the colors in place to be next to each other.

Notes
red = 0, white = 1, blue = 2. In order of ascending

Test Case

Pseudo
Idea 1- is to split the array and use mergeSort
send to mergeSort(nums)
mergeSort(nums)
    if nums.length <= 1, return nums
    get left side of nums
    get right side of nums
    recurse through two mergeSorts
    merge(left, right)

merge(left, right)
    sortedArr = [];
    while(left.length && right.length)
        if left is greater than right
            remove right[0]
            sortedArr.push right[0]
        vice versas for left < right
    return [...sortedArr,...left,...right]
**Issue is that it is not sorting in place or with the same array 

Idea 2-brute force
we know that there are only three colors
**0 can stay in front
**2 must go to back
**1 goes to wherever 0 stops
pointer for 0
pointer for end = nums.length
let i = 0
while(i < nums.length)
    if(nums[i] = 0)
    


find min of nums
find max 
if min and max are equal, return nums
else
let j = 0 fast
let i = 0 slow
while i < nums.length
    while(j < nums.length)
        if j = min
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++;
            return
        if j reaches the end and min is not found, min++ and j resets back to i
        else if j = nums.length-1
            min++;
            j = i;
        else
            j++
    j =i
return nums;

 */