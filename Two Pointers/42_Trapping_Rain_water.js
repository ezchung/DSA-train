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

PseudoCode
create two pointers: leftSide, rightSide
leftSide = 0;
rightSide = 2;
while rightSide is < heightsLen
    if middle is < leftSide && rightSide is > middle or leftSide - 1 does not exist

More basic psuedocode:
Iterate through the heights using pointers
    Look at middle
    if middle is less than left and less than right or 

Another way: outside in
create two pointers: start, end
create count
let dist = start - end - 2 //to exclude the two end borders
find the start where water can be trapped (separate function)
    returns index of start and end where numbers are greater than 0
while start !== end
    //automatically assuming everything else is 0, everything in between (if start is 0, end is 6, dist is 6 - 2)

**/
