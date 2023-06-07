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
- idea: look at substring and based on how many differences between characters, can implement k or the idea of k having performed some operation.
- repeating question is can i change it.
    - never actually change the string, but using k, can tell if it can be changed

- look at substring first two
    no differences, continue on
    differences, using tempK, achknowledge the change
        - Question with this one is: having different strings

TestCases
- ABC k:1 => longest would be 2
    - either AAC, BBC, ABB...
- CCCCCAAACAAA k = 2=> longest would be 8
    - AAAAAAAA

PseudoCode
    longestLen
    tempK = k
    currentChars = []
    iterate through s
        add the char to currentChars

 */