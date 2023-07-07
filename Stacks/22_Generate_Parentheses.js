/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
};

/**
Problem
Create different styles of parentheses based on how many overall parentheses.

Notes
for each left parenthese "(", there must be a right ")"

Idea
Start off with open parentheses
Number of open and number of closed. Algo close < open, then allow close parentheses
stack array
results array
base case
- when n = 3, 3 open and 3 closed
- close < open

*Only add open parentheses if open < n
*Only add a closing parentheses if closed < open
*Valid if open === closed === n

Psuedo
Main function
stack = []
res = []
recursive(stack,res,0,0,n)

recursion function(stack, res, openN, closedN,n)
baseCase
    if open === closed === n,
        join the stack and add to result
        return
    if openN < n
        stack.push("(")
        recursive(stack, res, openN+1, closedN,n)
        stack.pop()
    if(closedN < openN)
        stack.push(")")
        recursive(stack, res, openN+1, closedN,n)
        stack.pop()


*/