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