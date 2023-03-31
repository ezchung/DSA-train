/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let endBrackets = ")}]";
    let startBrackets = "({[";
    for(let char of s){
        if(endBrackets.indexOf(char) !== -1){
            if(stack.length === 0) return false;
            let oppoBracket = stack.pop();
            if(startBrackets.indexOf(oppoBracket) !== endBrackets.indexOf(char)) return false;
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;    
};

/**
Notes
- Open brackets must be closed by the same type.
- Open brackets must be closed in correct order
    ([)] -- should not work 
    ({[]}) -- works
- Every close bracket has a  corresponding open bracket
- Only holds (), {}, []

PsuedoCode
stackArr = []
iterate through the string
    look at char. if char is ), ], }
        when I pop stack, the result should be the corresponding value
    else if the front part of bracket, add to stack

return stackArr.length === 0

*/