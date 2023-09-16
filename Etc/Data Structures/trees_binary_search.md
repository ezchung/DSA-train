# Trees
### What is a tree
- A data structure that consists of nodes in a parent / child relationship
    - Each node can point to multiple nodes
    - The node can only point to children, not siblings
        - Those would be considered a graph
    - There can only be only parent
#### Tree Terminology
- Root : The top node in a tree
- Child : a node directly connected to another node when moving away from the root
- Parent : The converse node of a child
- Sibling : A group of nodes with the same parent
- Leaf : a node with no children
- Edge : The connection between one node and another
#### Use Cases for Trees
- HTML DOM
    - <body><div></div></body>
    - div is the child of body  
    - document.body.children to find children
- Network routing
    - Link-state algorithms.
    - Broadcast
- Abstract syntax trees
    - what the keywords in programming work
    - Way of if oyu were writing code to take in other code and to parse through that code, this will help you out
- AI
    - mini max tree (decision tree)
        - Given state of board game, find best possible moves
- Folders in Operating Systemg

### Trees vs Lists
- Lists ==> linear
- Trees ==> nonlinear
    - many different paths you can take becuase there are potentially many other chidlren

### Differences between trees, binary trees, and binary search trees (BSTs)
#### Trees
#### Binary Trees
- Each node can have at most two children
#### Binary Search Trees
- a specific type of binary tree meant to search
- Sorted in a particular way
    - Every parent node has at most two children
    - Every node to the left of a parent node is always less than the parent
    - Every node to the right of a parent node is always greater than the parent
- used to store data that can be compared / sortable. Way for us to order it

### Implementation

#### BST
##### Basic Implementation
```JS
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

let tree =  new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree
//BinarySearchTree {root: Node}
tree.root
//Node {value: 10, left: Node, right: Node}
```

##### Actual Implementation
```JS
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

/* INSERTING A NODE
- Create a new node
- Starting at the root
    check if there is a root, if not- the root now becomes that new node
    if there is a root, check if the value of the new node is greater than or less than the value of the root
    if it is greater
        check to see if there is a node to the right
            if there is, move to that node and repeat these steps
            if not, add that node as the right property
    if it is less
        check to see if there is a node to the left
            if there is, move to teh node and repeat these steps
            if not, add that node as the left property
- return the tree (but some people chose to return the node or just null)
*/

/*
            10
    5              13
2       7       11      16
*/
    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        } 
        let currRoot = this.root;
        while(true){
            if(val === currRoot.val) return undefined; //but we can create a tuple val and give it a counter if we want to know how many of each exists.
            if(val < currRoot.val){ //going to the left, check if there is a left
                if(currRoot.left === null){
                    currRoot.left = newNode;
                    return this;
                }
                currRoot = currRoot.left;
            }else if(val > currRoot.val) { //dont need to use else if
                if(currRoot.right === null){
                    currRoot.right === newNode;
                    return this;
                }
                currRoot = currRoot.right;
            }
        }
    }

/* Finding a Node
Starting at the root
    check if there is a root, if not, done searching
    if there is root, check if the value of the new node is the target value. If found then done
    if not, check to see if the value is greater than or less than the value of the root
    if it is greater
        check to see if there is a node to the right
            if there is, mvoe to that node and repeat these steps
            if not, done searching
    if it is less
        check to see if there is a node to the left
            if there is, move to that node and repeat these steps
            if not, done searching
*/

    find(val){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){ //while there is something to loop over and not yet found
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                // found = true;
                return true;
            }
        }
        // if(!found) return false;
        // return current
        return false;
    }
}
```
##### Big O of BST
- Insertion === O(log n)
- Searching === O(log n)
    **NOT Guaranteed because of some binary trees that are shaped differently
    - set up looking like a linked list. It will look through every node
    - a one-sided tree