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
var maxDepth = function(root) {
    let rows = getRows(root, [], 0);
    console.log(rows)
    return rows.length;
};

const getRows = (root, rows, row) => {
    if(!root) return rows;
    if(rows.length === row) rows.push(0);
    getRows(root.left, rows, row+1);
    getRows(root.right, rows, row+1);
    return rows;
}

/**
find the last row, the last row would be the depth
if left or right exists, go down and this would be last row.
create arr

Code
create arr
push into arr if arr.length === row
recurse left and right, row+1

looking for longest depth and length
if(!root) return 0

recurse(root,sum)
if root === null, return sum;
if root.left, recurse(root.left, sum+1);
if(root.right) 
*/

// To find the maximum depth of the tree we can apply a simple recursive approach...
// Where each function call will represent a subtree which has root node called as ‘root’...
// We traverse the binary tree by a recursive function starting from the root node...
var maxDepth = function(root) {
    // Base case...
    // If the subtree is empty i.e. root is NULL, return depth as 0...
    if(root == null)  return 0;
    // if root is not NULL, call the same function recursively for its left child and right child...
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    // When the two child function return its depth...
    // Pick the maximum out of these two subtrees and return this value after adding 1 to it...
    return Math.max(leftDepth, rightDepth) + 1;    
    // Adding 1 is the current node which is the parent of the two subtrees...
};