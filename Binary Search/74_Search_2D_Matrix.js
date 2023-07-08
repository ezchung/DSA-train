/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
};

/**
Problem

Notes
Solution in O(log(m*n))

Code
Similar to binary search but need the row first and then use binary search on array
identify the row that the target number will live on
function findRow
    left = 0, right = matrix.length-1
    while(left <= right)
        let mid = Math.floor((left+right)/2)
        let rowLen = matrix[mid].length
        if(matrix[mid][0] >= target || target <= matrix[mid][rowLen-1])
            return mid
        if(target < matrix[mid][0])
            right = mid-1;
        if(target > matrix[mid][rowLen-1])
            left = mid+1
    return mid

function findTarget(matrix[mid]=row)
    left = 0, right = row.length-1
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target) return true;
        if(nums[mid] < target) left = mid+1;
        if(nums[mid] > target) right = mid-1;
    }
    return false
*/