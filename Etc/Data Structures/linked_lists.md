# Singly Linked Lists
LINKED LISTS
- Data structure (ordered) each item is mapped.
- Contains a head, tail, and length property. No index
- Consists of nodes and each node has a value and a pointer to another node or null
### Comparisons with Arrays
- Lists
    - No indicies
    - Connected via nodes with a next pointer
    - Random access is not allowed
    - Good with insertion and deletion. Not everything has to be re-indexed. So nice when working long data sets and don't need random access
- Arrays
    - Indexed
    - Insertion and deletion can be expensive
    - Can quickly be accessed at a specific index
### Starter Code
```JS
//piece of data - val
//reference to next node - next

class Node{
    cosntructor(val){
        this.val = val;
        this.next = null;
    }
}

let first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("Billy")

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //PsuedoCode
    //accepts a val => create new node using the vlaue passed to function
    //if no head, set head and tail to be the newly created node
    //otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    //increment length by 1
    //return linked lists
    push(val){ //add new node to the end of list
        let newNode = new Node(val)
        if(this.head){
            this.tail.next = new Node; //take current tail and attach
            this.tail = newNode;
        }else if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this; //returns entire list
    }
}

let list = new SinglyLinkedList()
list.push("Hello");
list.push("bye");
```