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
   - Replace with the most recently added
   - Adjust (sink down)
   >>Most of the time, will be removing the root which is the max
   >>Sink Down?
        The procedure for deleting the root from the heap (effectvely extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is a called down-heap (aka bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max) 
    >>Swap 
        Take the root and swap with the last number in the values array. Then shift down from the top or the new root. 
        Goes toward the direction of the larger child
    PsuedoCode (removing or extractMax)
    - Swap the first value in the values property with the last one
    - Pop from teh values property so you can return the value at the end
    - Have the new root "sink down" to the correct spot
        - Your parent idx starts at 0 (the root)
        - Find the index of the left child: 2 * idx + 1 (make sure its not out of bounds)
        - Find the idx of the right child: 2* index + 2 (make sure its not out of bounds)
        - If the left or right child is greater than the element...swap. If both left and right are larger, swap with the largest child
        - The child indx you swapped to now becomes the new parent index
        - Keep looping and swapping until neither child is larger than the element
        - Return the old root
   */
  remove(){
      
    const max = this.values[0];
    const end = this.values.pop();
    //Edge case (when one element left, without this "if condition" code, reinserting the end)
    if(this.values.length > 0){
        this.values[0] = end;
        //trickle down
        this.sinkDown();
    }
    return max;
  }
  sinkDown(){
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if(leftChildIdx < len) {
            leftChild = this.values[leftChildIdx];
            if(leftChild > element){
                swap = leftChildIdx;
            }
        }
        if(rightChildIdx < len) {
            rightChild = this.values[rightChildIdx];
            if(
                (swap === null && rightChild > element) || 
                (swap !== null && rightChild > leftChild)
            ){
                swap = rightChildIdx;
            }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
    }
  }
  //For min, would be more changes with the comparisons of greater than's
}

let heap = new MaxBinaryHeap();
heap.insert(55);
//[41,39,33,18,27,12]
```

## Priority Queue
- Uses binary heaps
    - a heap that is standarized with the rules of a binary tree
    - a "heap" is a broader concept encompassing various types of heap data structures, 
    while a "binary heap" is a specific type of heap implemented as a binary tree with specific properties. 
    The most common types of binary heaps are max-heaps and min-heaps, used in various applications for efficient data processing and sorting.
### What is this?
- A data structure where each element has a priorty. Elements with hgiher priorities are served before elements with lower priorities
- A naive version
    - Would be to iterate over the entire thing to find the highest priority element
- A idea is like a queue, but the format is a binary heap
### Use Cases

### Implementation
- Write a min binary heap - lower number means higher priority
- Each node has a val and a priority. use the priority to build the heap
- Enqueue method accepts a value and priority makes a new node, and puts it in the right spot based off its priority
- Dequeue method removes root element, returns it, and rearranges heap using priority

```JS
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        //Edge case (when one element left, without this "if condition" code, reinserting the end)
        if(this.values.length > 0){
            this.values[0] = end;
            //trickle down
            this.sinkDown();
    }
    return min;
  }
  sinkDown(){
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if(leftChildIdx < len) {
            leftChild = this.values[leftChildIdx];
            if(leftChild.priority < element.priority){
                swap = leftChildIdx;
            }
        }
        if(rightChildIdx < len) {
            rightChild = this.values[rightChildIdx];
            if(
                (swap === null && rightChild.priority < element.priority) || 
                (swap !== null && rightChild.priority < leftChild.priority)
            ){
                swap = rightChildIdx;
            }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
    }
  }
}
```

### Big O of Binary Heaps
    Insertion : O(log N)
    Removal : O(log N)
        - Each time we go down a step, we have two times the nodes
            To insert, worst case. Going to end up at the root. 
                only have to compare one time per row (of direct siblings)
                2 to what power gives us 16
    Search : O( N )
        - Not really made to be searchable

Recap
- Binary Heap is a type of a heap which is a type of a tree
    - Very useful data structures for sorting and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either beign smaller or larger than their children
- With just a little bit of math, can represent heaps using arrays
