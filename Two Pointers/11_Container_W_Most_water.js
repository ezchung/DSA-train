/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    // if(height.length === 2){
    //     let min = Math.min(height[0], height[1]);
    //     return 1 * min;
    // }
    let max = -Infinity;
    let left = 0;
    let right = height.length - 1;
    while(left <= right){
        let dist = right - left;
        let min = Math.min(height[left], height[right]);
        let area;
        if(height[left] <= height[right]){
            area = height[left] * dist;
            max = Math.max(max,area);
            left++;
        }else{
            area = height[right] * dist;
            max = Math.max(max,area);
            right--;
        }
    }
    return max === -Infinity ? 0 : max;
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