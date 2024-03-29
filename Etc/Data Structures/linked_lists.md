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

# Doubly Linked Lists
Construct a doubly linked list
Almost identical to Singly Linked lists, except every node has another pointer, to the previous node
when popping off the last item, in Singly, have iterate through and then pop off. 
Comparisons with Singly Linked Lists
- More memory === more flexibility

```JS
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //PUSH
    //Adding a node to the end of the Doubly Linked List
    //PseudoCode
    //Create new node with the value passed to the function
    //if the head property is null set the head and tail to be the new node
    //if not, set the next property on the tail to be that node 
    //set the previous property of the new node to be the former tail
    //set the tail as new node
    //increment length
    //return doubly linked list
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let prevTail = this.tail;
            prevTail.next = newNode;
            newNode.prev = prevTail;
            this.tail = newNode;

            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //POP
    //Removing node from the end of the Doubly Linked List
    //PseudoCode
    //if there is no head, return undefined
    //store the current tail in a variable to return later
    //if the length is 1, set the head and tail to be null
    //update the tail to be the previous node
    //set the newTail's next to null
    //return the value of the node removed
    //**Need to account for both pathways
    pop(){
        if(!this.head) return undefined;
        let oldTail = this.tail;
        if(this.length === 1){
            this.head === null;
            this.tail === null;
        }else{
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    //Shift: Remove node from beginning of the Doubly LL
    //PsuedoCode
    //if length is 0, return undefined
    //store current head property in a variable 
    //if length is one
        //set head and tail to null
    //Update the head to be the next of the old head
    //set the head's prev property to null
    //set the old head's next to null
    //decrement the length
    //return the old head
    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //Unshift: Adding node to beginning
    //PsuedoCode
    //function with val passed in
    //if length is 0
        //set head to be new node
        //set tail to be new node
    //else
        //set prev on the head of the list to be the new node
        //set next property on the new node to be the former head node
        //update instance's head to be the new node
    //Increment length
    //Return list
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head === newNode;
            this.tail === newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Get: Access node in a doubly linked list by position. 
        //(Unique from singly LL) --> 
    //PsuedoCode
    //If the index is less than 0 or greater than or equal to length, return null
    //If idx is less than or equal to half the length of the list
        //iterate through the list from head and loop towards the middle
        //return the node once it is found
    //If idx is greater than half the length of the list
        //iterate through the list from tail towards the middle
        //return the node once it is found
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        if(idx <= Math.floor(this.length/2)){
            let count = 0;
            let curr = this.head;
            while(count != idx){
                curr = curr.next;
                count++;
            }
            return current;
        }else{
            let count = this.length - 1;
            let current = this.tail;
            while(count !== idx){
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    //Set: Replacing the value of a node to the index a doubly linked list
    //PseudoCode
    //Create a variable which is the result of the get method at the index passed to the function
        //If the get method returns a valid node, set the value of that node to be the value passed to the function
    //otherwise, return false
    set(idx, value){
        let foundNode = this.get(idx);
        if(foundNode !== null){
            foundNode.val = value;
            return true;
        }
        return false;
    }

    //Insert: add node by a certain position
    //PseudoCode
    //If idx is less than 0 or greater than to the length, return false;
    //if idx is 0, unshift
    //if idx is the same as the length, push
    //use the get method to access the index -1
    //set the next and prev properties of the neighboring nodes and itself to link together
    //increment length
    //return true
    insert(idx, value){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.unshift(value);
        if(idx === this.length) return !!this.push(val); //change to true when it is returned a valid node
        let newNode = new Node(val);
        let prevNode = this.get(idx-1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }

    //Remove: Remove node by a certain position
    //PseudoCode
    //If idx is less than 0 or >= length, return undefined
    //If idx is 0, shift
    //if idx is same as length-1, pop
    //use the get method to retrieve the item to be removed
    //update the next and prev properties to remove the found ndoe from the list
    //set next and prev to null on the found node
    //decrement the length
    //return the removed node
    remove(idx){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return this.shift(value);
        if(idx === this.length) return this.pop(val); //change to true when it is returned a valid node
        let removedNode = this.get(idx);
        let beforeNode = removedNoed.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}
```

### Big O Notation for Doubly Linked List
- Insertion, Removal == constant time O(1) which is different from singly LL
- Searching, Access == O(N)
    - Technically searching is O(n/2) but still O(N)

### Recap
- Doubly LL are almost identical to Singly LL except there is an additional pointer to previous nodes.
    - Like pages of a book
- Better than Singly for finding nodes and can be done in half the time.
    - However, do take up more memory considering the extra pointer
    - Comes with mroe memory
