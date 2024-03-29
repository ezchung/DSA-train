/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if(tokens.length < 2) {
        return (Number(tokens[0]) || 0)}
    let stack = [];
    let operators = ['+', '-', '*','/'];
    stack.push(tokens[0]);
    stack.push(tokens[1]);
    let i = 2;
    while(stack.length >= 1){ 
        if(operators.indexOf(tokens[i]) >= 0){
            let second = Number(stack.pop());
            let first = Number(stack.pop());
            let result;
            if(tokens[i] === '+') result = first+second
            else if (tokens[i] === '-') result = first-second
            else if (tokens[i] === '*') result = first*second
            else if (tokens[i] === '/') result = Math.trunc(first/second)
            if(i === tokens.length-1) return result
            stack.push(result);
        }
        else{
            stack.push(Number(tokens[i]))
        }
        i++;
    }
};

/**
Problem

Notes
Always rounds down when divided.
Reverse Polish notation
    the two numbers preceding the operator happens first
when I see an operator,look at previous two numbers and that will be the result
Truncate: Removes the decimal points from the number. 


PsuedoCode
create stack = []
operator = "+-* /"
add to stack
if element is an operator, look at previous two in stack and create the result.
    remove the two numbers previous from stack and add the result
continue until stack is empty.

create stack = []
operators = ['+', '-', '*','/']
add first element to stack
stack.push(tokens[0])
let i = 1
while stack.length !== 0
    if tokens[i] is in operators
        let first = stack.pop()
        let second = stack.pop()
        let result
        if tokens[i] === '+' result = first+second
        else if tokens[i] === '-' result = first-second
        else if tokens[i] === '*' result = first*second
        else if tokens[i] === '/' result = Math.floor(first/second)
        stack.push(result)
    else stack.push(tokens[i])
    i++
*/