/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let returnArr = [];
    let left = 0;
    let right = numbers.length-1;
    while(left < right){
        if(numbers[left] + numbers[right] === target){
            returnArr.push(left+1,right+1);
            left++;
            right = numbers.length-1;
        }else if(numbers[left] + numbers[right] < target){
            left++;
        }else{
            right--;
        }
    }
    return returnArr;
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