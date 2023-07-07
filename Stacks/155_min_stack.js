var MinStack = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

/**
 * Stack LIFO
 * Notes: O(1) constant time
 * 
 * PsuedoCode with stack as array
 * MinStack
 *      create stack as array
 *      create min variable
 *          has to remember the min variable order so that when i push
 * push: pushes element val onto the stack
 *      this.stack.push(val)
 *      
 *      
 * pop: removes the lement on the top of the stack
 * 
 * top: get the top element of stack
 * 
 * getMin: retrieves the minimum element in stack
 */

/**
 hint: think of each node having a corresponding min value
 push
 - in array for min, check the value and insert the value where it belongs
 
 with min method
 - should be at the top of this.min array so I can grab in constant time
 - Question is how do I continually organize it with push and pop
    Does the organization have to be in constant time as well? if we use a different method is that being hacky?

Solution
- in the array, attach the two together
    When pushed, create an object with the value and the min (look at current length of stack, give option of the incoming value or the min between the two)
    In min, we will look at the last entry and return that min

Another solution (similar idea)
    with push
        create the object and add the object to stack
        reassign the currentMin if applicable
    with pop
        destructure val and prevMin out of stack obj
        the current min will be equal to prevMin
            //works because prevMin will be the min that was at the top before value was pushed in so with getMin() we can just say this.min


    - Whenever you add a val, add to min as well. 
        check if less than min, 
            yes, add this to front of min, move current min to index 1
            no, but less than second min, add to second min, remove current second min
                NM, when a pop is used at that is the current min, we start missing one. If we pop consecutively, missing two. 
    - Conclusion: this upper code will not scale well

*/

/**
 * monotonic stack : always non-decreasing or non-increasing
 * 
 */