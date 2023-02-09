/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
};

/**
Problem
- Given an unsorted array of integers, return the length of the longest consecutive elements sequence
- What makes a consecutive element sequence? add by 1s

Notes
- O(n) Time

Code
- Sort the array
- create variable for length and to get the max 
- create variable to check length
- iterate through the sorted array
    if next number is +1 of current number
        add to checkLength
    else
        returning variable is the max between the checkLength and officialLength
return the check length
*/