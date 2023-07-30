/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
};

/**
Problem

Notes
Always rounds down when divided.
Reverse Polish notation
    the two numbers preceding the operator happens first
when I see an operator,look at previous two numbers and that will be the result


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