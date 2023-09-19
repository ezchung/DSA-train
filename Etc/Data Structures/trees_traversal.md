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
