/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
};

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
        test if valid by substrLen (rightP-leftP)-mostFrequentChar#
        if not valid
            tempLeft
            while left is less than right
                check checking til valid or left = right
            leftP = tempLeft
        if valid
            check with longestLen
        rightP++;
    return longestLen
 */