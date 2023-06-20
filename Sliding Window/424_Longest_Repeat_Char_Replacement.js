/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let leftP = 0;
    let rightP = 0;
    let map = {};
    let res = 0;
    let maxCount = 0;

    while (rightP < s.length) {
        addToMap(map, s[rightP]);
        maxCount = Math.max(maxCount, map[s[rightP]]);
        
        let windowLen = getWindowLen(leftP, rightP);

        let validWindow = windowLen - maxCount <= k;
        if (!validWindow) {
            removeFromMap(map, s[leftP]);
            leftP++;
        }
        windowLen = getWindowLen(leftP,rightP);
        res = Math.max(res, windowLen);
        rightP++;
    }

    return res;
};

function getWindowLen(leftP, rightP){
    return rightP-leftP+1;
}

function removeFromMap(map, letter){
    map[letter]--;
    if(map[letter] === 0){
        delete map[letter];
    }
}

function addToMap(map, letter){
    if(letter in map){
        map[letter]++;
    }else{
        map[letter] = 1;
    }
}

function getMostFreqChar(map){
    let maxCount = 0;
    let maxChar = '';
    for (let char in map) {
        if (map[char] > maxCount) {
        maxCount = map[char];
        maxChar = char;
        }
    }
    return maxChar;
}

/**
Problem
- With a string s and integer k as the number of operations, create the longest possible substring of repeating characters with the option of "changing a selected character" k times.

Notes
- s consists of only uppercase letters
- dont actually have to make those changes
- idea: look at substring and based on how many differences between characters, can implement k or the idea of k having performed some operation.
- repeating question is can i change it.
    - never actually change the string, but using k, can tell if it can be changed

- look at substring first two
    no differences, continue on
    differences, using tempK, achknowledge the change
        - Question with this one is: having different strings

- replace the characters with least appearances

- array or hash map
    - count the number of occurences with each character
- take substrLen - count[most frequent char]
    will give us the number to see if we can do k operations
    as long as this algorithm is less than or equal to k, valid substr
        and the window can extend, otherwise the leftP moves until it is valid once again

TestCases
- ABC k:1 => longest would be 2
    - either AAC, BBC, ABB...
- CCCCCAAACAAA k = 2=> longest would be 8
    - AAAAAAAA

PseudoCode
    have the current hash map
        purpose: to record whether the substring is valid by getting subStrLen-count of the most frequent char
    longestLen
    leftP, rightP = 0
    while rightP <= s.length
        add the char to currentCharMap
        find the most frequent char in the currentCharMap
            the one with highest number
        test if valid by substrLen (rightP-leftP)-mostFrequentChar# is less than or equal to k
        if not valid
            tempLeft
            while left is less than right
                check checking til valid or left = right
            leftP = tempLeft
        if valid
            check with longestLen
        rightP++;
    return longestLen

Logic Errors
    - the getMostFreqChar function
        not needed as with maxChar, everytime we should go through we would keep 
        track of the max count of any character within the current window
        - but this can work as well
    - windowLen. previously had it only on the line before the if statement
        was running into bug where leftP increment is not taken into account even when invalid
    
 */