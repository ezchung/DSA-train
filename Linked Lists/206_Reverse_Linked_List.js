/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {

};

/**
Using pointers
have to save next as a temporary
have prev and current
head is prev. current is head.next. after is head.next.next
reassign current to head. and prev to new head's next.
prev is then reassign to current and continue from there

while current is not null

*/