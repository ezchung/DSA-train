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

    //No backwards tail so need to wrap through the whole list and get info for new tail
    //PsuedoCode
    //If there are no nodes in the lsit, return undefined
    //Loop through the list until you reach the tail
    //Set the next property of the 2nd to the last node to be null
    //Set the tail to be the 2nd to last node
    //Decrement the length of the list by 1
    //return the value of the node removed 
    pop(){ //removes a ndoe from the end of the LinkedList
        if(!this.head) return undefined;
        let curr = this.head;
        let newTail = current;
        while(curr.next){
            newTail = curr;
            curr = curr.next;
        }
        console.log(curr.val, newTail.val) //last and 2nd last
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return curr;
    }

    //Removing a new node from the beginning of the linked list. Moving head to second spot
    //PsuedoCode
    //If there are no nodes, return undefined
    //Store the current head property in a variable
    //Set the head property to be the current head's next property
    //decrement the length by 1
    //return the value of the node removed
    shift(){
        if(!this.head) return undefined;
        let currHead = this.head;
        this.head = currHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null //if head did not have one, then the next is already null
        }
        return currHead;
    }

    //Adding a new node to the beginning of the LL
    //PsuedoCode
    //Create new node using the value passed to the function
    //If there is no head property on list, set the head and tail to be the newly created node
    //otherwise set the newly created node's next property to be the current head property on the list
    //set the head property on the lsit to be that newly created node
    //increment the length of the list by 1
    //return LL
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Retrieving a node by its position in the linked list
    //get(0) get the first index. traverse
    //PseudoCode
    //function takes index
    //if index is less than zero or greater than or equal to length of list, return null
    //loop through the list until you reach the index and return the node at that specific index
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let curr = this.head;
        for(let i = 0; i < idx; i++){ //want to stop one node before the desired index, so you need to iterate idx times, not idx + 1 times.
            curr = curr.next;
        }
        return curr;
        //or
        //let counter = 0;
        // while(counter !== idx){
        //     curr = curr.next;
        //     counter++;
        // }
    }

    //Changing the value of a node based on it's position in the linked list
    //PseudoCode
    //function takes value and idx
    //use get function to find the specific node which returns to us the foudn node
    //if node not found, return false,
    //if found, set the value of that node to be the vlaue passed to the function and return true
    set(idx,val){
        let node = this.get(idx);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    //Adding a node to the Linked List at a specific position
    //PseudoCode
    //function takes index and value
    //if index is less than zero or greater than the length, return false
    //if index is same as the length, push a new node to end of the list (use push method)
    //if the index is 0, unshift a new node to the start of the list (use the unshift method)
    //otherwise (middle area), use get method, access the node at the index -1
    //set the next property on that node to be the new node
    //set the next property on that node to be the new node
    //set the next property on the new node to be the previous next
    //increment the length
    //return true
    insert(idx,val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) {
            return !!this.push(val); //or can just write this.push(val); return true
        }
        if(idx === 0) {
            return !!this.unshift(val); //doubly negate or bang. will coerce to boolean value.
        }
        let newNode = new Node(val);
        let prevNode = this.get(idx-1);
        let temp = prev.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //Removing a node from the Linked List at a specific position
    //PseduoCode
    //If idx is less than zero or greater than the length, return undefined
    //if the idx is the same as the length-1, pop
    //if idx is 0, shift
    //Otherwise, use the get method, access the node at the index -1
    //set the next property on that node to be the next of the next node
    //decrement the length
    //return value of the node removed
    remove(idx){
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length-1) return this.pop();
        let prevNode = this.get(idx-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    //Reverse
    //Reversing the linked list in place
    //PsuedoCode
    //Create a variable called next / prev
    //Create variable called node and intialize it to the start of the head
    //loop through list
    //set next to be the next property on whatever node is
    //set the next property on the node to be whatever prev is
    //set prev to be the value of the node variable
    //set the node variable to be the value of the next variable
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next; 
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        let arr = [];
        let curr = this.head;
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr;)
    }
}

let list = new SinglyLinkedList()
list.push("Hello");
list.push("bye");
```

### Big O of Singly Linked Lists
Common Operations
- Insertion : O(1)
- Removal : depends O(1) or O(N) based on where we are removing from. If removing from front, O(1) (shift)
- Searching : O(n)
- Access : O(n)

- If concerned about insertion time, may be better if random access is less neccessary
- Singly Linked Lists are an excellent alternative to arrays when insertion and deltion at the beginning are frequently required.
- Arrays cotnain a built in index whereas Linked Lists do not
- The idea of list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues