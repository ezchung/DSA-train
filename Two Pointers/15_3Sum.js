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

  PseudoCode
 > Two pointers
 memoized array
 iterate through the array
 look at the first position and the second position,
    add them together and find what number we need to get 0
    find the number
    add to array sorted
    check to see if array exists in memo
        if it does, skip
        doesnt, add to memo
    move the second pointer up one
    once the second pointer reaches the end
        first pointer moves up and the new array is sliced from start+1 to finish
        continue until array length is equal to 3
*/