/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length === 0 ? 0 : 1;
    let start = 0;
    let end = 1;
    let currentMax = 1;
    let currentChars = [s[start]];
    while(end < s.length){
        if(currentChars.includes(s[end])){
            console.log(end-start, end, start, currentChars)
            start = end;
            currentChars = [s[start]];
        }else{
            console.log(currentMax, end, start, "after change of currentMax")
            currentChars.push(s[end]);
            currentMax = Math.max(currentMax, currentChars.length);
        }
        end++;
    }
    return currentMax;
};

/**
Question
    Find the longest substring witout repeat characters. So in that substring there should be no same chars

Notes
    Would capital letters be considered same?
    if the string is at least one, the minimum would be 1
    Sliding window

Different Pseudo
    currentChars = [] this would hold the previous chars
        maxLength 
        iterate through s 
            let char = s[i]
            if char is in currentChar
                get the current length of currentChar
                check length of maxLength and currentChar
                get the index of currentChar
                remove everything from the beginning to the index in that currentChar
            if not
                add to currentChar
                check length of maxLength and currentChar
        return maxLength

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