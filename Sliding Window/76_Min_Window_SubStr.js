/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return "";

    let string = s.toLowerCase();
    let substr = t.toLowerCase();
    
    let charsNeeded = {};
    for(let idx in t){
        charsNeeded[t[idx]] = (charsNeeded[t[idx]] || 0) + 1
    }

    let leftP = 0,
        rightP = 0,
        min = [];
    
    let numOfNeeded = t.length;

    while(rightP < s.length){
        if(charsNeeded[s[rightP]] > 0){
            numOfNeeded--;
            charsNeeded[s[rightP]]--;
        }
        if(rightP-leftP >= t.length-1){
            if(numOfNeeded === 0){
                let dist = rightP-leftP;
                let currentMin = (min[0] || Infinity)-(min[1] || Infinity);
                let res = dist >= currentMin;
                if(res) min = [rightP,leftP];
                if(s[leftP] in charsNeeded){
                    numOfNeeded++;
                    charsNeeded[s[leftP]]++;
                }
                leftP++;
            }
        }
        while(leftP < rightP || !(s[leftP] in charsNeeded)){
            if(s[leftP] in charsNeeded) continue;
            else leftP++;
        }
        rightP++;
    }
    return min
};

/**
Problem
Create a window where the string is contains all the letters of "t"
- returns the string

Notes
Get the map of t
Get the left and right pointers
    should start with a letter in t and end with a letter in t

Idea
Create a map of the chars that are eleigible
if we find a substr that contains everything needed, get the length of left to right, see if that is the minimum window size
    put the eligible windows in array
at the end return the minimum window.
Remember, should start with a letter in s and end with letter in s as well

PseudoCode
make everything a single case(lower case)
if t is bigger than s, return ""

create charsNeeded {}
for(let idx in t) charsNeeded[t[idx]] = (undefined or 0) + 1
leftP = 0, righ
    first chectP = 0, minimum = (Infinity,infinity)
numberOfNeededLetters = t.length : purpose check if the required letters match
Maybe? minLen = Infinity

while rightP < s.length
    //Check if the rightP letter in charsNeeded is > 0
    if(charsNeeded[s[rightP]] > 0)
        numberOfNeededLetters--;
        charsNeeded[s[rightP]]--;
    if the length works, then after we can check whether minimum, otherwise, should
    just be added.
    if(rightP-leftP >= t.length-1)
        //check if numberOfNeededLetters is 0 ie all needed letters are met
        if(numberOfNeededLetters === 0)
            get length of current => rightP - leftP and compare to current min
            reassign min tuple
            //move leftP now
            if(s[leftP] in charsNeeded) numberOfNeededLetter++; charsNeeded[s[left]]++;
            leftP++;
        //move leftP up and if leftP was a neededLetter, add one to letter and to charsNeeded
        //with the if statement in while, may require a copy of original charsNeeded
        while(leftP < rightP or s[leftP] not in charsNeeded) 
            //since while loops run at least once
            if(s[leftP] in charsNeeded) continue;
            else leftP++
    rightP++

 */
 /**
 leftP should only increase when
 - move leftP up to either where rightP is or where a letter that exists in t is. Whichever comes faster.
 - not a "t" char
 - when leftP's letter validly appears again later in the substring
 - If leftP is a valid char,
        add the charsNeeded
  */

/**************** First Iteration ********/
/******************** Error with Time Exceeded *******************************/
var minWindow = function(s, t) {
    if(t.length > s.length) return "";

    let charsNeeded = {};
    for(let idx in t){
        charsNeeded[t[idx]] = (charsNeeded[t[idx]] || 0) + 1
    }

    let leftP = 0,
        rightP = 0,
        min = [];
    
    let numOfNeeded = t.length;

    while(rightP < s.length){
        if(charsNeeded[s[rightP]] > 0){
            numOfNeeded--;
            charsNeeded[s[rightP]]--;
        }
        if(rightP-leftP >= t.length-1){
            if(numOfNeeded === 0){
                let dist = rightP-leftP;
                let currentMin = (min[0] || Infinity)-(min[1] || Infinity);
                let res = dist >= currentMin;
                if(res) min = [rightP,leftP];
                if(s[leftP] in charsNeeded){
                    numOfNeeded++;
                    charsNeeded[s[leftP]]++;
                }
                leftP++;
            }
        }
        while(leftP < rightP || !(s[leftP] in charsNeeded)){
            if(s[leftP] in charsNeeded) continue;
            else leftP++;
        }
        rightP++;
    }
    return min.length === 0 ? "" : s.slice(min[0], min[1] + 1);
};

/**
 * Notes with why this first code was failing
 * 1. In the original code, the condition rightP - leftP >= t.length - 1 checks if 
 * the window size is equal to or larger than the length of string t. However, 
 * this condition is not sufficient. It should be modified to 
 * rightP - leftP + 1 >= t.length to ensure that the window size is exactly equal to the length of t.
 * 2. The nested while loop (leftP < rightP) is causing inefficient iterations. 
 * The purpose of this loop is to move the left pointer leftP until it reaches the 
 * right pointer or encounters a character that is in charsNeeded. However, 
 * the current implementation can lead to excessive iterations and result in a time limit exceeded error.
 */

/**************** 2nd Iteration ********/
/******************** Accepted *******************************/
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    let charsNeeded = {};
    for (let idx in t) {
        charsNeeded[t[idx]] = (charsNeeded[t[idx]] || 0) + 1;
    }

    let leftP = 0,
        rightP = 0,
        min = [];

    let numOfNeeded = t.length;
    let minLength = Infinity;

    while (rightP < s.length) {
        if (s[rightP] in charsNeeded) {
            if (charsNeeded[s[rightP]] > 0) {
                numOfNeeded--;
            }
            charsNeeded[s[rightP]]--;
        }

        while (numOfNeeded === 0) {
            if (rightP - leftP + 1 < minLength) {
                minLength = rightP - leftP + 1;
                min = [leftP, rightP];
            }

            if (s[leftP] in charsNeeded) {
                charsNeeded[s[leftP]]++;
                if (charsNeeded[s[leftP]] > 0) {
                    numOfNeeded++;
                }
            }
            leftP++;
        }

        rightP++;
    }

    return min.length === 0 ? "" : s.slice(min[0], min[1] + 1);
};

/** Updates with 2nd Iteration **/
/**
 * Same as before up to numOfNeeded declaration
 * Added minLen as Inifinity: purpose so you dont need to check if it is the first time
 *      and be afraid of undefined that may appear if min[0] does not exist
 * 
 * While rightP is less than the length of s
 *      if rightP char is in charsNeeded
 *          if charsNeeded's rightP char is > 0
 *              decrement numOfNeeded
 *          charsNeeded's rightP char value decrements
 *      while neededLetters is satisfied
 *          if rightP - leftP + 1 is less than minLen
 *              change minLen and the array of min len
 *          if s[leftP] is in charsNeeded 
 *              *i.e leftP needs to be moved as we are not at the end and needs to be moved to valid location
 *              increment charsNeeded leftP char value bc leftP char is not part of window anymore
 *              if charsNeeded[s[leftP]] is greater than 0
 *                  numOfNeeded++
 *              leftP++ (move on to next unless still valid window, then we can shrink window more)
 *      rightP++
 * return if min array has nothing, then no substr so return "" or slice the string from min[0] to min[1] inclusively
 ***Purpose of if charsNeeded[s[leftP]] is greater than 0
 *  - Algo triers to minimize the window size by moving leftP towards the right
 *      with each iteration of this loop, check if the current char at s[leftP] is in charsNeeded.
 *      if it is, means that removing the character from window will make the window invalid.
 *      However, simply checking if s[leftP] is in charsNeeded is not sufficient to determine if the char is 
 *      needed or not. Possible that the count of char in charsNeeded is already zero before current iteration
 *      idicating that the character is not needed anymore. Therefor check if character is actually needed.
 *      With this check, ensure that we only increment numOfNeeded when the character at s[leftP] is needed
 *          ie. its count in charsNeeded is greater than zero
 *      The second while loop will then end. And we can move from the current window and see if there is a better min result
 *      
 */