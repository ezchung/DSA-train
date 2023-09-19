# Heaps
- Type of tree, but additional considerations

## Binary Heap
- What is binary heap
    - Very similar to BST, but with some different rules
- Compare and contrast min and max heaps 
    - In a max bianry heap, parent nodes are always larger than child nodes, opposite for min heaps 
- Implement basic methods on heaps
- Where heaps are used in the real work and what other data structures can be constructued through heaps
    - Binary Heaps are used to implement Priority Queues which are very commonly used data structures
        - Priority queues : can put priority on values and place them in the queues accordingly.
            - Same functionality as priority queues
    - Alaso used with graph traversal algorithms

### Rules Max Binary Heap
- Each parent has at most two child nodes
- The value of each parent node is always gerater than its child nodes
- In a max binary heap, the parent is greater than the children, but there are no guarantees between siblings. So doesn't matter with greater on left or greater on right
    - No implied ordering between siblings
- A binary heap is as compact as possibly. All the children of each node are as full as they can be and left children are filled out first

### Storing Heaps
