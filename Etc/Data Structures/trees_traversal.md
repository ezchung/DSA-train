# Tree Traversal
- Idea of given any tree (BST or Binary Tree or Ternary Tree or any): how do we visit every node one time
- Traversing a tree
    - Two main ways
        - BFS
        - DFS
            - In order
                - Starting from the bottom left middle right
            - Pre order
                - top left right
            - Post order 
                - bottom left and right

## Breadth First Search
### Implementation
##### Steps - Iteratively
- Create a queue (can be an array) and another variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeded - add it to the queue
    - If there is a right property on the node dequeded - add it to the queue
- Return the variable that stores the values

```JS
BFS(){
    let node = this.root;
    let data = [],
        queue = [];
    queue.push(node);
    while(queue.length){
        node = queue.shift(); //takes from front
        data.push(node);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data; //[10,6,15,3,8,10]
}
```

## Depth First Search
/*
                    10
            6                15
        3      8                   20
*/
### Pre Order
Started from top to left and then right
-Steps (Recursively)
    Create a variable to store the values of node visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        Push the value of the node to variable that stores the values
        if the node has a left property, call the helper function with teh left proeprty on the node
        if the node has a right property, call the helper function with teh right property on the node
    invoke the helper function with the current variable
    return array of values
```JS
DFSPreOrder(){
    let data = []; //the order we are visiting the nodes
    let curr = this.root;
    function traverse(node){
        data.push(node.val);
        if(node.left){
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right);
        }
    }
    traverse(curr);
    return data; //[10,6,3,8,15,20]
}
```
### Post Order
look at bottom left, then right, the middle
- Steps (Recursively)
    Create a variable to store the values of nodes visited 
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        if the node has a left property, call the helper function with teh left proeprty on the node
        if the node has a right property, call the helper function with teh right property on the node
        Push the value of the node to variable that stores the values
        invoke the helper function with the current variable
    return array of values
```JS
DFSPostOrder(){
    let data = []; 
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data; //[3,8,6,20,15,10]
}

```

### In Order
- Steps (Recursively)
    Create a variable to store the values of nodes visited 
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        if the node has a left property, call the helper function with teh left proeprty on the node
        Push the value of the node to variable that stores the values
        if the node has a right property, call the helper function with teh right property on the node
        invoke the helper function with the current variable
    return the array of values
```JS
DFSInOrder(){
    let data = [];
    function traverse(node){
        if(node.left) traverse(node.left); //node.left && traverse(node.left)
        data.push(node.value);
        if(node.right) travese(node.right);
    }
    traverse(this.root)
    return data; //[3,6,8,10,15,20]
}
```

## When to use BFS or DFS
BFS vs DFS
- Tree that is fully fleshed out. BFS has a queue of the nodes that we have yet to visit
    - Queue grows
        - have to store a ton of data in queue
- On DFS, only keeping track of the depth
    - Same amount of work, but the amount of space that we work with
- Time complexity is the same. Each node is visited once
    - Space depends on the tree. With wide tree, BFS would take more space. With deep tree, DF would use more space

DFS
- In Order
    - When you use this on a BST, lowest to highest. Set of all the nodes that is in order
- Post Order
- Pre Order
    - Can be used to export a tree structure so that it is easily reconstructed or copied.
        - Flatten out and iterate through list as it is given to you so that it is readable
        - Automatically know which one is root

## Recap
- Trees are non-linear data structures that contain a root and child nodes
- Binary Tree can have values of any type, but at most two children for each parent
- BST are more specific version of binary trees where every node to left of the parent is less than its value and every node to the right is greater
- We can search through Trees using BFS and DFS

