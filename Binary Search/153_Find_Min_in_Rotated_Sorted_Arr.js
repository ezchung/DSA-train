/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return recurseNums(0, nums.length-1, nums)
};

let recurseNums = (leftP, rightP, nums) => {
    let mid = Math.floor((leftP+rightP)/2)
    //if leftP is greater than rightP, means the search space has been exhausted and return nums[0]
    if(leftP > rightP) {
        return nums[0];
    }

    //If nums[mid] > nums[mid+1], found min point
    if(nums[mid] > nums[mid+1]) {
        return nums[mid+1];}
    
    if(nums[mid] < nums[mid-1]) {
        return nums[mid];}

    //If nums[mid] > nums[0], recurse with left moving up
    //else nums[mid] < nums[length-1], right moves down
    if(nums[mid] > nums[0]) return recurseNums(mid+1, rightP, nums);
    return recurseNums(leftP, mid-1, nums);
}


/**
Problem


Notes
We have to check if the array is in correct order. sorted but not in order
    can i use binary search with this and rotate it
    find the start or end
    if greater than number on left but greater than number on right
        then the number on   is the start
    if in the correct position,
        ie middle number is greater than left and less than right
        pass in recursive function
        takes each half and finds out where the minimum is.

Code
using binary search
let res
let leftP = 0, rightP = nums.length-1
while(leftP <= rightP)
    let mid = Math.floor((left+right)/2)
    let leftNum = nums[mid-1] || NaN
    let rightNum = nums[mid+1] || NaN
    if(nums[mid] > leftNum && nums[mid] > rightNum)
        return rightNum
    if(nums[mid] > leftNum && nums[mid] < rightNum)
        recursive()


recursive function
baseCase
    if(nums[mid] > leftNum && nums[mid] > rightNum)
        return rightNum
    else
        recursive()
*/

/**** Failed due to Runtime Error. Loop is not defined properly */
var findMinRE = function(nums) {
    return recurseNumsRE(0, nums.length-1, nums)
};

let recurseNumsRE = (leftP, rightP, nums) => {
    //if leftP is greater than rightP, means the search space has been exhausted and return nums[0]

    //check if already sorted
    //if nums[leftP] less than or equal to nums[rightP], subarray sorted and return nums[leftP] as min

    let res = false;
    while(!res){
        let mid = Math.floor((leftP+rightP)/2);
        let leftNum = nums[mid-1] || NaN;
        let rightNum = nums[mid+1] || NaN;
        //Check if at edge and no results means its at the other half. go to the other side and check
        if(!leftNum){
            leftNum = nums[nums.length-1];
            if(nums[mid] > leftNum && nums[mid] > rightNum){
                res = true;
                return rightNum;
            }
            return;
        }else if(!rightNum){
            rightNum = nums[0];
            if(nums[mid] > leftNum && nums[mid] > rightNum){
                res = true;
                return rightNum;
            }
            return;
        }
        //When not at edges
        if(nums[mid] > leftNum && nums[mid] > rightNum){
            res = true;
            return rightNum;
        }else{
            //Currently not ending
            recurseNumsRE(mid+1, rightP, nums)
            recurseNumsRE(leftP, mid-1, nums)
        }
        res = true
    }
}