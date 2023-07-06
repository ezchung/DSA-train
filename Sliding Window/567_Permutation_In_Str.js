/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

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

/***************** Failed with "vxqakfyaqahufxfizupjrkkifjlbfqfeprqrfjvxnubntdtlvz" as s1  ******************/

var checkInclusion1 = function(s1, s2) {
    if(s1.length > s2.length) return false;

    let freqCounter = getFreqCounter1(s1);
    let leftP = 0;
    let rightP = 0;
    // console.log(Object.values(freqCounter))
    while(rightP < s2.length){
        if(freqCounter[s2[rightP]] && freqCounter[s2[rightP]] > 0){
            console.log("in first if ")
            freqCounter[s2[rightP]]--;
            if(checkIfSubstring(freqCounter)) return true;
        }else if(freqCounter[s2[rightP]] === 0){
            console.log("in 2nd if ")
            let char = s2[rightP];
            while(s2[leftP] !== char){
                freqCounter[s2[leftP]]++;
                leftP++;
            }
        }else{
            console.log("in 3rd if ", s2[rightP])
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

const getFreqCounter1 = (s1) => {
    let counter = {};
    for(let i = 0; i < s1.length; i++){
        counter[s1[i]] = counter[s1[i]] + 1 || 1
    }
    return counter;
}

const checkIfSubstring1 = (freqCounter) => {
    let values = Object.values(freqCounter);
    return values.every(val => val === 0) 
}

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
 *      decrement s2[leftP-1] from s2 count
 *      increment s2[rightP] to s2 count
 *      if s2[leftP] === s1[leftP], matches + 1; else --
 *      if s2[rightP] === s1[rightP] matches ++; else --
 * return false
 */

/**
 * Neatcode uses charcodeat ideas
 * Create two maps
 * Matches variable : shortcut to not compare the two maps. If matches is 26, then correct
 * 
 * edge case
 * if s1 length > s2 length, return false
 * create two objects for s1Count, s2Count
 * for loop til length of s1
 *      
 */


/******** Accepted using charCode ***********/

const checkInclusion2 = (s1, s2) => {
    if (s1.length > s2.length) return false;
  
    const freqCounter = getFreqCounter2(s1);
    let leftP = 0;
    let rightP = 0;
  
    while (rightP < s2.length) {
      const charCode = s2.charCodeAt(rightP);
      freqCounter[charCode]--;
  
      while (freqCounter[charCode] < 0) {
        const leftCharCode = s2.charCodeAt(leftP);
        freqCounter[leftCharCode]++;
        leftP++;
      }
  
      if (rightP - leftP + 1 === s1.length) {
        return true;
      }
  
      rightP++;
    }
  
    return false;
  };
  
  const getFreqCounter2 = (s1) => {
    const counter = Array(128).fill(0);
  
    for (let i = 0; i < s1.length; i++) {
      const charCode = s1.charCodeAt(i);
      counter[charCode]++;
    }
  
    return counter;
  };


/*** without any extra map
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

/*** Failed using uniqueChars similar idea to first ************/

var checkInclusion3 = function(s1, s2) {
    if(s1.length > s2.length) return false;

    const s1Count = {};
    const s2Count = {};

    const letters = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i<letters.length; i++){
        const letter = letters[i];
        s1Count[letter] = 0;
        s2Count[letter] = 0;
    }
    
    //Create two objects
    for(const ch of s1){
        if(!(ch in s1Count)){
            s1Count[ch] = 0;
            s2Count[ch] = 0;
        }
        s1Count[ch]++;
    }

    //Add the char count for the first window
    for(let i = 0; i < s1.length; i++){
        const char = s2[i];
        if(char in s1Count){
            s2Count[char]++;
        }
    }

    let uniqueChars = new Set(s1);
    let matches = 26;
    
    for(const ch of uniqueChars){
        if(s1Count[ch] !== s2Count[ch]){
            matches--;
        }
    }

    //If true after first time
    if(matches === 26) return true;

    //starting points
    let leftP = 1;
    let rightP = s1.length;

    while(rightP < s2.length){
        if(matches === 26) return true;
        const leftChar = s2[leftP];
        const rightChar = s2[rightP];
        s2Count[leftChar]--;
        s2Count[rightChar]++;
        if(s2Count[leftChar] === s1Count[leftChar]) matches++
        else matches--;
        if(s2Count[rightChar] === s1Count[rightChar]) matches++
        else matches--;
        leftP++;
        rightP++;
        console.log(matches, s2Count, "s2", s1Count)
    }
    return false;
};

/**
 * check if s1 is longer than s2
 * create obj to store freq of required string
 * for loop
 *  obj[s1[i]] = current number (first iteration will be undefined, then 0) + 1;
 * leftP, rightP = 0; requiredLength (len of substr required in s2) = s1.len
 * while right < s2 length
 *  If s2[right] char in s1, then decrease requiredLen
 *  since we encountered new char ie s2[right] decrease count in obj
 *      even if it is not present in obj we only care about needed
 *  right increments
 *  
 *  If requiredLen is 0, means we found a match of the s2 substring
 *  
 *  If window len is equal to s1 length, then have to remove left el of window
 *      left++ and add new element from right to next iteration
 *  Code:if right - left === s1.length
 *      if left element we are removing was a required character then increase reqLen
 *      increase count of left element from window
 *      decrease window size from left 
 */
/** Accepted using requiredLen and just obj with current s1 obj ********/
var checkInclusion4 = function(s1, s2){
    if(s1.length > s2.length) return false;
    let charsReq = {};

    //create loop to create the charsReq obj
    for(let i in s1){
        charsReq[s1[i]] = (charsReq[s1[i]] || 0) + 1;
    }
    //console.log(charsReq);

    let left = 0, 
        right = 0,
        requiredLen = s1.length;
    
    while(right < s2.length){
        //If s2 char in s1 obj, then requiredLen--
        if(charsReq[s2[right]] > 0){
            requiredLen--;
        } 
        //Outside because if there is a case of other letters outside of s1 chars need to be decreased
        charsReq[s2[right]]--;
        right++;
        //If 0, means found match of s1 and s2 substr
        if(requiredLen === 0) return true;
        
        //once we get past inital window length
        if(right - left === s1.length){
            if(charsReq[s2[left]] >= 0) requiredLen++;
            //increase count of left el
            charsReq[s2[left]]++;
            left++;
        }
    }
    return false;
}
