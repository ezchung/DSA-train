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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;

    let temp = root.left
    root.left = root.right;
    root.right = temp;
    if(root.left) invertTree(root.left)
    if(root.right) invertTree(root.right)
    return root
};

/**
Problem
- Reverse the binary tree

Algorithm


Idea:
Maybe working recursively
switch left and right 
once there is no children return
if there is only one,
    if it is on the left, move to right. if right move to left
    

Code
invertTree(root){
    if(!root) return;

    let temp = root.left
    root.left = root.right;
    root.right = temp;
    if(root.left) invertTree(root.left)
    if(root.right) invertTree(root.right)
    return root

}

 */