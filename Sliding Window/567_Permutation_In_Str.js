/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
};

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


*/