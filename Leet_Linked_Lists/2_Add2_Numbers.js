/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = +createArr(l1);
    let num2 = +createArr(l2);
    let result = num1 + num2;
    let final = createLL(result);
    return final
};

let createArr = function(linkedList){
    let value = linkedList;
    let organizedArr = []
    while(value !== null){
        organizedArr.unshift(value.val);
        value = value.next;
    }
    return organizedArr.join("");
}

let createLL = function(num){
    let text = Array.from(String(num));
    const head = new ListNode(text[0]);
    let curr = head;
    console.log(text, "Text")
    for(let n = 1; n < text.length; n++){
        const newNode = new ListNode(text[n]);
        curr.next = newNode;
        curr = newNode;
    }
    return head;
}

/* 
iterate through the linked lists and create a string of the numbers
create variable equal to l1.val
create string1, str2
while variable is not null
    unshift to array
    variable = variable.next;

make string to number and add the two strings

create an array for the iteration of LL
create LL for return result
*/