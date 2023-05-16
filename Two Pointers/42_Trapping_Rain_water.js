/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // Two pointers
    if(height.length === 0 || height === null){
        return 0;
    }

    let l = 0;
    let r = height.length-1;
    let lMax = 0;
    let rMax = 0;
    let result = 0;
    while(l < r){
        lMax = Math.max(lMax, height[l]);
        if(height[l] < lMax){ //current height of left index is less than the leftMax, add to result, lMax - height[l] so it cant be negative addition
            result += lMax - height[l] //will skip the first 
        }

        rMax = Math.max(rMax, height[l]);
        if(height[r] < rMax){
            result += rMax - height[r];
        }

        height[l] < height[r] ? l++ : r--;
    }

    return result;

    
    // Brute Force
    // if(height.length === 0 || height === null){
    //     return 0;
    // }
    // let result = 0;
    // for(let i = 0; i < height.length; i++){
    //     let leftMax = 0;
    //     let rightMax = 0;
    //     for(let j = 0; j < i; j++){ //This for loop will check from beginning to point of i
    //         leftMax = Math.max(leftMax, height[j]);
    //     }
    //     for(let j = i+1; j< height.length; j++){
    //         rightMax = Math.max(rightMax, height[j]);
    //     }
    //     const water = Math.min(leftMax,rightMax) - height[i];
    //     console.log(water, "water")
    //     if(water>0) result += water; //Take out negative numbers
    // }
    // return result;
};

/**
Notes:
Given array representing height
What is the maximum amount of water that this can trap
The algorithm to figure out how many it can trap
    Height on both sides must exist for water to be trapped
    min(left and right) - current height
    - determines how much water we can trap at position i
        if negative, then cannot trap water in that location

Idea: look at the height (height is like rocks). The space above is the borders around them allow it are what causes water to be trapped
Look at everything in between

PseudoCode
two pointers
    if height is null or length is 0, return 0
    left = 0, right = height.length - 1 //this is index
    result = 0
    while left is greater than right
        lMax = max of lMax and current height at l
        if height[l] < lMax, res += lMax - height[l]
        same with rMax
        if height[l] < height[r], left++ else r--;
    return res

brute force method
    if height is null or length is 0, return 0
    let result = 0
    iterate through height
        leftMax, rightMax = 0
        iterate j from 0 to i
            leftMax = max between leftMax and current height element
        iterate j from i+1 to the end of height
            rightMax = Max between rightMax and current height element
        **Purpose of two inner loops is to get the max from each side
        const water is the min of twoMaxes (as this is maxhieght of contained water) - current height
        result += water
    return result

Stack
    
**/
