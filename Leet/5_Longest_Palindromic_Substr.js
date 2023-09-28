/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
};

/**
A string is palindromic if it reads the same forward and backward.

PsuedoCode
left and right pointer
max length variable = 1
result tuple = [left,right]
if first letter is not the same as the last letter, push one up
**Maybe like a stack
when it is a palindrome, check to see if right-left is greater than max, if so, reassign

check if palindrome
function isPalindrome
    let left and right pointer
    //if length of left and right is odd, then last letter doesnt matter
    //if even, last two should be the same
    while(left < right)
        if left and right is not equal
            return false
        else
            left++
            right--
    return true
    


*/