/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let organized = nums.sort((a,b) => a-b);
    //new set is made and then spread out into a new array
    let sorted = [...new Set(organized)]

    let longestLen = 0;
    let currentLen = 0;
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] + 1 === sorted[i+1]){
            currentLen += 1;
        }else{
            currentLen += 1;
            longestLen = Math.max(longestLen, currentLen);
            currentLen = 0;
        }
    }
    return longestLen;
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