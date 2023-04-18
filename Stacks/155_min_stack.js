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
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
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

    - Whenever you add a val, add to min as well. 
        check if less than min, 
            yes, add this to front of min, move current min to index 1
            no, but less than second min, add to second min, remove current second min
                NM, when a pop is used at that is the current min, we start missing one. If we pop consecutively, missing two. 
    - Conclusion: this upper code will not scale well

*/