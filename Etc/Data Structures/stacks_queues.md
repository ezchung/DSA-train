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

