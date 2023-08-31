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

/*
Test Case That Failed
- l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
- l2 = [5,6,4]
To make it work with larger arrays, you need to be careful with the JavaScript number 
precision limitations when working with very large numbers. JavaScript numbers 
have a limited range and can only accurately represent integers up to a certain value. 
If numbers that exceed this limit, will face issues with accuracy.
*/
var addTwoNumbers = function(l1, l2) {
    let reverseOne = +getReversedNumber(l1).join("");
    let reverseTwo = +getReversedNumber(l2).join("");
    let added = reverseOne+reverseTwo;
    return createLL(added)
};

let getReversedNumber = function(start, newArr=[]){
    if(!start) return;
    newArr.unshift(start.val)
    getReversedNumber(start.next, newArr);
    return newArr;
}

let createLL = function(val){
    let remainder = val % 10;
    val = Math.floor(val / 10);
    const head = new ListNode(remainder)
    let curr = head;
    while(val > 0){
        remainder = val % 10;
        val = Math.floor(val / 10);
        const newNode = new ListNode(remainder);
        curr.next = newNode;
        curr = newNode;
    }
    return head;
}


/*
Problem: Reverse the two lists of numbers and add the two numbers and return a 
new linked list in reverse form

Test Case 
l1=[9,9,9,9,9,9,9], l2=[9,9,9,9]
9,999,999 + 9,999 = 10,009,998
[8,9,9,9,0,0,0,1]

Code
Main Function
send to recursive function. 
Add the two numbers
Create reversed linked list

Recursive Function
iterate through the list and create the number. recursively
newArr = []
base case
    if no val, return newArr
different input
    add val to newArr
    newArr.unshift(val)
    pass in getReversedNumber
    return newArr

CreateLL
**When you create a new ListNode using const head = new ListNode(), you are 
creating a new object and assigning it to the head variable. Then, when you assign 
head to curr with let curr = head, both head and curr refer to the same object in memory.

This means that any changes you make to the object through one variable will 
be reflected when accessing the object through the other variable. However, you 
can later change the curr variable to point to a different object without affecting 
the head variable.

*/

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
// var addTwoNumbers = function(l1, l2) {
//     let num1 = +createArr(l1);
//     let num2 = +createArr(l2);
//     let result = num1 + num2;
//     let final = createLL(result);
//     return final
// };

// let createArr = function(linkedList){
//     let value = linkedList;
//     let organizedArr = []
//     while(value !== null){
//         organizedArr.unshift(value.val);
//         value = value.next;
//     }
//     return organizedArr.join("");
// }

// let createLL = function(num){
//     let text = Array.from(String(num)).reverse();
//     const head = new ListNode(text[0]);
//     let curr = head;
//     console.log(text, "Text")
//     for(let n = 1; n < text.length; n++){
//         const newNode = new ListNode(text[n]);
//         curr.next = newNode;
//         curr = newNode;
//     }
//     return head;
// }

/* 
iterate through the linked lists and create a string of the numbers
*/