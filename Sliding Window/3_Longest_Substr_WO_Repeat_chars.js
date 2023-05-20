/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
};

/**
Question
    Find the longest substring witout repeat characters. So in that substring there should be no same chars

Notes
    Would capital letters be considered same?
    if the string is at least one, the minimum would be 1
    Sliding window

General Psuedo
    two pointers
        one for start of substring the next for the end of substring 
    currentMax
    create an array to hold characters
    iterate through string(while end < string.length)
        check if the current end character exists in the array, 
        if yes means that char is a repeat, (move the window)
            check the length of substring and find out if it is currently the longest
            currentMax = max(currentMax, end-start+1)
            start = end
            array is now equal to [s[start]]
        if not,
            add the char to the array
        end++;
    return currentMax

TestCase
"abbcabc"
 0123456
*/