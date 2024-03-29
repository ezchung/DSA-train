# Stacks
### What is a stack
    - An abstract data structure
    - Collection of data that need sto abide by the LIFO principle
        - The last one is removed first
    - Can be implemented using a linked list
        - using the doubly linked list since you need to remove from the back
### Use cases for a stack
    - the call stack
    - Managing function invocations
    - Undo / Redo the latest action
    - Routing (the history object) : the previous page routes
### Operations on a stack data structure (two different ways)
#### Array Implementations
- Easiest way. Other languages comes with their own stack data type, but we can use Arrays
```JS
//for webpages that we have visited
//this is in console
let stack = []
stack.push("google") //Console prints 1
stack.push("good")   //2
stack.push("golf")   //3
stack //[google, good, golf]
stack.pop() //golf

//Using built in array methods
let stack = []
stack.unshift("create new file") //1
stack.unshift("resize file") //1
stack.unshift("cloned out wrinkle") //1
stack //["cloned out wrinkle", "resized file", "create new file"]
stack.shift() //cloned out wrinkle
```
- Between these two, which is better
    - There is a problem for one of these
        - The Big O Complexity
            - unshift / shift will reassign all remaining variables to new indices

### Stack Creation
```JS
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first= null;
        this.last = null;
        this.size = 0;
    }
}
```
#### Linked List Implementation
- In a stack, push and pop are to be constant time
    - but in a singly linked list, this is not true as we have to loop through the entire loop so instead use shift and unshift

```JS
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

/*
PsuedoCode
- The function accepts a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node 
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment size of stack
*/
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size++;
        /*
        ++x (pre-increment) means "increment the variable; the value of the expression is the final value"
        x++ (post-increment) means "remember the original value, then increment the variable; the value of the expression is the original value"

        Means the same thing here
        x++;
        ++x;

        x = 0;
        y = array[x++]; // This will get array[0]

        x = 0;
        y = array[++x]; // This will get array[1]
        */
    }

/*
PsuedoCode
If no nodes in stack, return null
create temp variable to store first property on stack
if there is only 1 node, set first and last property to null
if there is more than 1 node, set the first property to be the next property on the current first
decrement the size by 1
return the value of the node removed
*/
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){ //if it is the last thing in the stack
            this.last = null;
        }
        this.first = this.first.next; //move the first to the next variable
        this.size--;
        return temp.val;
    }
}
```
- Removing from the beginning because we want to keep push and pop constant time with a singly LL

### Big O of Stacks
- Insertion == O(1)
- Removal == O(1)
- Searching == O(N)
- Access == O(N)

### Recap
- Stacks are a LIFO data structure
- Stacks are used to handle function invoations (the call stack) and etc
- Not a built in data structure in JS
- making it as a class is the preferred way to use a stack, especially when using large amounts of data and only function is to push or pop. Arrays as shown above is the same idea as [here](#array-implementations)

# Queues
### What is a queue
- a FIFO data structure

### Use Cases
- Background tasks
- Uploading resources / Printing & Task Processing

### Implementation
- The important methods are dequeue and enqueue
#### Array Implementation
```JS
let q = [];
q.push("one") //1
q //["one"]
q.shift() //"one"
//or
q.unshift("one") //1
q.pop() //"one"
//Unlike stacks, needs to be reindexed at one point with array implementations
```

#### Class Implementation
```JS
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /*
    PsuedoCode
    function takes a value
        Create new node using the value passed to the function
        if there are no nodes in the queue, set this node to be the first and last of queue
        otherwise, set the next property on the current last to be that new node and then set the last property of the queue to be the new node
    */
   enqueue(val){
    let newNode = new Node(val){

    }
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    } else{
        this.last.next = newNode; //old last nodes' next property is reassigned
        this.last = newNode
    }
    return ++this.size;

   /*
   If no first property, return null
   store the first property in a variable  
   check if the frist is the same as the last. if so, set te first and last to be null
   if more than 1 node, set the first property to be the next property of first
   decrement by size by 1
   return the value of the node dequeud 
   */
   dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next //going onto next node 
    this.size--;
    return temp.val;
   }
}
```

### Big O of Queues
- Insertion  == O(1)
- Removal == O(1)
- Searchung = O(N) //Generally not used for queues
- Accessing == O(N)