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
    - mini max tree
    - Given state of board game, find best possible moves

### Trees vs Lists
- Lists ==> linear
- Trees ==> nonlinear
    - many different paths you can take becuase there are potentially many other chidlren
### Differences between trees, binary trees, and binary search trees (BSTs)
### Implementation