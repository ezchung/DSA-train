/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    const freqCounter = getFreqCounter(s1);
    let leftP = 0;
    let rightP = 0;
    // console.log(Object.values(freqCounter))
    while(rightP < s2.length){
        const char = s2[rightP];
        if(freqCounter[char] && freqCounter[char] > 0){
            console.log("in first if ")
            freqCounter[char]--;
            if(checkIfSubstring(freqCounter)) return true;
        }else if(freqCounter[char] === 0){
            console.log("in 2nd if ")
            while(s2[leftP] !== char){
                freqCounter[s2[leftP]]++;
                leftP++;
            }
        }else{
            console.log("in 3rd if ", char)
            while(leftP !== rightP){
                if(s1.indexOf(s2[leftP]) > -1) freqCounter[s2[leftP]]++;
                leftP++;
            }
        }
        console.log(freqCounter, leftP, rightP)
        rightP++;

    }
    return false;
};

const getFreqCounter = (s1) => {
    let counter = {};
    for(let i = 0; i < s1.length; i++){
        counter[s1[i]] = counter[s1[i]] + 1 || 1
    }
    return counter;
}

const checkIfSubstring = (freqCounter) => {
    let values = Object.values(freqCounter);
    return values.every(val => val === 0) 
}

/**
Problem
Does s2 have a window where the s1 characters exist?

Notes
Create something to compare the two.
Remember just need it to happen once.
Also window length will max be the length of s1

PseudoCode
if s1 length is greater than s2 length, return false

leftP = 0, rightP = 1
create freqCounter for s1

if check if s2[0] is in s1, add to map

while rightP is less than s2.length

    **Two options when character is in s1,
        if s2 char is in and freqCounter allows it, then add to array
        if s2 char is in, but freqCounter doesnt allow space,
            then leftP should move up one and array remains same
    if rightP is character that is in s1 & freqCounter is > 0
        add to array or whatever I choose to keep track of the valid window.
        subtract from the freqCounter. Saying this space has been occupied
    else if rightP is the char, but freqCounter is 0
        move leftP up one
    else
        leftP = rightP
        array or whatever i chose, goes back to empty

    

    if sort the array and join and compare with sorted s1, return true

return false

*** without any extra map
Idea:
while rP is less than s2 length
    find if valid character
    if it is and greater than 0 then subtract
    else if it is but not greater than 0
        then find the location where rP character is and move lP up to there and add whatever character needs to be added back
    if not than move lP up to rP and add the valid characters back to freqCounter

while rightP < s2.length
    if freqCounter[s2[rightP]] exists and greater than 0;
        freqCounter[s2[rightP]]--;
        check if satisfies condition
            get freqCounter.values
            if true that all values are 0, then return true
    else if freqCounter[s2[rightP]] exists but not greater than 0
        let char = s2[rightP]
        while s2[leftP] !== char
            freqCounter[s2[lP]]++;
            lP++
    else
        while lP !== rP
            get the value of freqCounter[s2[lP]]++;
            lP++;
    rP++;

*/

/**
 * Next up PsuedoCode
 * 
 * Problem: Looking for a permutation of the s1 in s2
 *      Looking for a window of the anagram
 * O(26n) using hash map or O(n)
 * 
 * O(n) + O(26)
 * s1 count, s2 count
 * matches (value): purpose so we do not need to compare entire hash map every time. 
 *          will store the exact number of matches between the two hash maps
 *          once we have 26 matches, result is true
 *              **Initial match number should be the number of different chars in s1
 * Idea
 *      have the initial matches
 *      when matches equals 26 return true
 *      when new char is added
 *          remove the previous char from s2 count
 *          add the new char to s2 count
 *          look at the two positions in s1
 *              update matches based on whether the number of trues
 *  Edge case
 *      s1 longer than s2? return false
 * 
 * Create two maps of s1 and s2
 *      s1 will have content
 *      s2 will be 26 spots of 0
 * Create matches based on unqiue chars in s1 (can just get length of Set(s1))
 * leftP = 0
 * rightP = s1.length
 * with this create inital s2 map
 * and create check inital matches ( O(26) )
 * leftP and rightP++
 * while rightP < s2.length
 *      if matches === 26, return true
 *      decrement s2[leftP] from s2 count
 *      increment s2[rightP] to s2 count
 *      if s2[leftP] === s1[leftP], matches + 1; else --
 *      if s2[rightP] === s1[rightP] matches ++; else --
 * return false
 */