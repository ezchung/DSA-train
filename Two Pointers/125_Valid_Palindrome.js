/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let sAsArr = s.split("")
    let singleWord = sAsArr.filter((char)=> alphabet.indexOf(char.toLowerCase()) !== -1 || !isNaN(parseInt(char)));
    let left = 0;
    let right = singleWord.length-1;
    if(singleWord.length === 0) return true;
    while(left < right){
        if(singleWord[left].toLowerCase() !== singleWord[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

/**
Problem
- return true if palindrome, if not false

Code
- iterate through string and take out anything that is not an alphabet
- lower case the string
- create two pointers
- while start is not equal to end
    - check if the two are equal
    - if not return false
    add 1 to start, minus 1 to end
- return true
*/