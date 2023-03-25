/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums, memo=[]) {
    if(nums.length <= 3) return memo;
    for(let i = 0; i <= nums.length-1; i++){
        let first = nums[i];
        let second = nums[i+1];
        let firstTwoSum = first + second;
        let remainingSum = 0 + -(firstTwoSum)
        let idxs = []
        nums.forEach((num,idx) => {
            if(num === remainingSum) idxs.push(idx);
        });
        if(nums.includes(remainingSum) && isDifferentIdx(i,i+1, idxs)){
            let tempArr = [];
            tempArr.push(first,second,remainingSum)
            tempArr.sort();
            if(!hasArray(memo,tempArr)){
                memo.push(tempArr);
            }
        }
        console.log(memo)
    }
    return memo;
};

function isDifferentIdx(firstIdx,secondIdx, idxs){
    /**
    Check that idx can be a different element for the three, but also included. 
    - If first or second exists and are taken out, an idx still exists.
    Code
    Look at idxs, if not first or second, return true
    return false
    */
    for(let idx in idxs){
        if(idx !== firstIdx && idx !== secondIdx) return true;
    }
    return false;
}

/**
Check to see if memo array has target array already counted for.
 */
function hasArray(memo, target){
    return memo.some(subArray => {
        return subArray.every((el, idx) => {
            return el === target[idx];
        });
    });
}
/**

 PsuedoCode
 > Three pointers
    > one fast, one medium, one slow
    > if slow and medium added together, find the value that makes it equal to 0
        > if found before the last value, push medium up one
            > if medium finds one,
                medium should continue until one before last
        > slow should continue until 2 before last
 - condition: while there are three values in array 

  PseudoCode
 > Two pointers
 memoized array
 iterate through the array
 look at the first position and the second position,
    add them together and find what number we need to get 0
    find the number and check that it is not the same element as first or second
    add to array sorted
    check to see if array exists in memo
        if it does, skip
        doesnt, add to memo
    move the second pointer up one
    once the second pointer reaches the end
        first pointer moves up and the new array is sliced from start+1 to finish
        continue until array length is equal to 3

New Code
*Note: Sorting so that we know what the order is where to look
- sort the array nums
- create a variable array = []
- if nums array is < 3, return variable array
- Iterate through the nums array
    - left is i+1
    - right is from the back
    - if i is greater than 0 and nums[i] === nums[i-1] continue
    - while left is greater right
        create variable sum that takes i + left + right
        if sum === 0
            create an array of the three values
            push the result
            increment left
            while num[left] === nums[left-1] && left < right, increment left
                *Note: Keeps on adding left til the values are different
        else if sum greater than 0
            decrement right
        else
            increment left (meaning less than 0 so no result)
- return result
*/