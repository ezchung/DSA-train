/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
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