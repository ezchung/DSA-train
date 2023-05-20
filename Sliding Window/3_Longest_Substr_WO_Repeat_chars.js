/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
};

/**
Question
    Find the longest substring witout repeat characters

Notes
    Would capital letters be considered same?
    if the string is at least one, the minimum would be 1
    Sliding window

General Psuedo
    two pointers
        one for start of substring the next for the end of substring 
    currentMax
    iterate through string(while end < string.length)
        check the end of substring and the one before
        if they are not the same, currentMax is max(currentMax, end-start)
        if they are the same, start is now equal to the end
        end++;
    return currentMax

PsuedoCode

*/