/*
Intuition
> Traverse both linked lists simultaneously & add their node values & store the 
result in a new linked list

Approach
> Iterates through the linked lists until both LLs are null and the sum is greater than 0
    > calculate sum by adding the values of the current nodes of l1 and l2 and the carry
        from the prev. iteration
    > If sum is greater than or equal to 10, carry over is calculated and sum is reduced by 10
    > New node is created with teh value of sum and is added to the result LL using the head pointer
    > Head pointer moved to next node in the result LL
    > Sum is set to the carray and carry set to 0 for the next iteration
> return result LL
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
var addTwoNumbers = function(l1, l2) {
    let lst = new ListNode(0);
    const head = lst;
    let sum = 0;
    let carry = 0;

    while(l1 !== null || l2 !== null || sum > 0){
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10){
            carry = 1;
            sum -= 10;
        }
        head.val = sum;

        if(l1 !== null || l2 !== null || carry > 0){
            head.next = new ListNode(carry);
            head = head.next;
        }

        sum = carry;
        carry = 0;
    }
    return lst;
}


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