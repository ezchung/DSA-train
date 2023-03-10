/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let newS = getCompletedString(s);
    let newT = getCompletedString(t);
    let result = newS === newT ? true : false
    return result;
};

function getCompletedString(str){
    let newStrChars = [];
    for(let char of str){
        if(char === "#"){
            newStrChars.pop();
        }else{
            newStrChars.push(char);
        }
    }
    return newStrChars.join("");
}

/**
Question: 
    Given two strings, return true if two are equal. # means backspace so delete the prior element if it exists

PsuedoCode
Create a function that sends one each and returns with the backspaces functionality invoked
    create a new array
    iterate through string
        if element has a hashtag
            remove the element from the back
            so array.pop()
        else
            add to array
    return array.join("");

check if two are equal to each other

 */