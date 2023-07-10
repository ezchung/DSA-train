/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
};

/**
Look at the two lists. 
There are two pointers
create new linked list
let list1Curr = list1
let list2Curr = list2
let l1prev = null;
let l2prev = null;
let prev = null
let newLLCurr = null
while(list1Curr || list2Curr){
    if(!list1Curr) pass rest of list2 into the new LL
    if(list1Curr.val > list2Curr.val)
        pass in list2Curr to newLL
        prev.next = list2Curr //go to prev and assign next
        prev = list2Curr
        list2Curr = list2Curr.next
    

}

While(list1&list2) so while both are active
    if(list1.val <= list2.val)
        curr.next = list1
        list1 = list1.next
    else
        curr.next = list2
        list2 = list2.next

at the end add whichever has something left
curr.next = list1 || list2
return mergedList
 */