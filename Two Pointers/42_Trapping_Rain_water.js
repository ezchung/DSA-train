/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
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

**/
