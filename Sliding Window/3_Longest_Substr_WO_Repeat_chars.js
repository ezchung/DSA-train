/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length === 0 ? 0 : 1;

    let currentChars = [];
    let maxLength = -Infinity;
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        let charIndex = currentChars.indexOf(char);
        if(charIndex !== -1){
            let currentSubstr = currentChars.length;
            maxLength = Math.max(maxLength, currentSubstr);
            currentChars = currentChars.slice(charIndex+1);
            currentChars.push(char);
        }else{
            currentChars.push(char);
            maxLength = Math.max(maxLength, currentChars.length);
        }
    }
    return maxLength;
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

Solution Psuedo
    create Set
    leftPointer = 0, rightPointer doesnt need to be declared til for loop
    max = 0
    iterate through string with index rightPointer
        while char is in set (so while set has the char of index rightP, remove the char of leftP and increment leftP)
            remove the leftMost character
            move left up by 1
        add rightMost char to set (add the char to set and check the size of set (set.size))
        max = Math.max(res, rightPointer-leftP + 1)

TestCase
"abbcabc"
 0123456
*/