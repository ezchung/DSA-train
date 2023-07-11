/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = { val: 0};
    dfs(root, diameter);
    return diameter.val;
};

//Initially diameter was a primitive value. Changed the diameter to a reference value
//In JS, with primitive values are passed by value, means that when you pass them as a arguements, a copy of the
/*
In JS, with primitive values are passed by value, means that when you pass them as 
arguements, a copy of the value is created within the function scope. Any changes made to the copied value
within the function do not affect the original value outside the function

Originally, just modifying the local copy of the diameter and not the original value.
As a result, the changes did not persist across the recursive calls and the diameter value never changed

By changing it to reference variable. Copy of the reference to the object is passed
By using an object or an array to hold the value that needs to be shared and updated across 
recursive calls, overcome the limitation of passing primitive values by value. 
This enables you to correctly update and propagate the shared value within the recursive algorithm.

*/

const dfs = (root, diameter) => {
    if(!root) return 0;
    const leftLen = dfs(root.left, diameter)
    const rightLen = dfs(root.right, diameter)
    diameter.val = Math.max(diameter.val, leftLen+rightLen);
    console.log(diameter, leftLen, rightLen)
    return 1+Math.max(leftLen, rightLen);
}

/**
Problem: Get the length of longest path not only from root, but from any starting point and between any two nodes

Question can be which root has the longest path with both subtrees

Code
O(n^2)
recursive look
create array each idx will represent the diameter
look at each node and see the length from left and right

recursive funct(root, diameter)
if(!root) return 0
let leftLen = recurse(root.left)
let rightLen = recurse(root.right)
diameter = Math.max(diameter, leftLen+rightLen)
return 1+diameter

 */