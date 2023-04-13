/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
};

/**
Problem:
With int array height of length n, find the two values that would contain the most water.
    Find the largest area (distance of the two values times the height of lower value)
Return integer.

PsuedoCode
if length is two, multiply by 1 and lower val
create two pointers (left & right)
create max value
while left is not equal to right
    get the distance by right - left
    find which number is lower between the two values and multiply
    based on which(left or right val) is lower
        increase or subtract.
    
*/