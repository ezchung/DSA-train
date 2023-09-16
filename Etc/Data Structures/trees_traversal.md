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

