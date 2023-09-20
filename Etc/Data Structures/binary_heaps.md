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
    - Also used with graph traversal algorithms

### Rules Max Binary Heap
- Each parent has at most two child nodes
- The value of each parent node is always gerater than its child nodes
- In a max binary heap, the parent is greater than the children, but there are no guarantees between siblings. So doesn't matter with greater on left or greater on right
    - No implied ordering between siblings
- A binary heap is as compact as possibly. All the children of each node are as full as they can be and left children are filled out first

### Storing Heaps
- in the array, looking at the children
    - parent is index n
        - left child is at 2n + 1
        - right child is at 2n + 2
- Looking for parent
    - For any child at index n...
        - parent is at index (n-1)/2 floored

### Implementation
```JS
class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12]
    }

    /*
    INSERT Method
    PsuedoCode Sparknotes
    - Add to the end
    - Bubble up
        - Swap it until it finds the correct resting place
    PsuedoCode Detailed
    - Push the value into the values property on the heap
    - Bubble Up:
        - Create a variable called index which is the length of the values property - 1
        - Create a variable called parentIndex which is the floor of (index-1)/2
        - Keep looping as long as the values element as the parentIndex is less than the values element at the child element 
            - Swap the value of the values element at the parentIndex with the value of the element property at the child index
            - Set the index to be the parentIndex and start over
    */
   insert(element){
        this.values.push(element);
        this.bubbleUp();
   }
   bubbleUp(){
        let idx = this.values.length-1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            // if(element > parent){
                // this.values[parentIdx] = element;
                // this.values[idx] = parent;
                // idx = parentIdx;
            // }
            if(element < parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
   }

   /*
   REMOVING From a heap
   - Remove the root
   - Replace with teh most recently added
   - Adjust (sink down)
   
   */
}

let heap = new MaxBinaryHeap();
heap.insert(55);
//[41,39,33,18,27,12]
```