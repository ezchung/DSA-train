/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
};

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
*/