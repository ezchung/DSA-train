/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
};

/**
PsuedoCode
since they are already sorted, from the back, check to see if left and right add up to target
while left is less than right
    if array left + array right is equal to target
        add to return array
        left++
        right = end of numbers array
    else if array left + array right is greater than target
        right--;
    else
        return numbers array
return numbers array
        
*/