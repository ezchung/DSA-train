/*
Divide and Conquer

Example Problem
Given a sorted array of integers, write a function called search, that accepts a value
and returns the index where hte value passed to the function is located. If not found, return -1

Test Cases
search([1,2,3,4,5,6], 4) ==> 3
search([1,2,3,4,5,6], 6) ==> 5
search([1,2,3,4,5,6], 10) ==> -1
*/

/*
Linear Search
O(n)
*/

function searchLinearly(arr,val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]=== val){
            return i;
        }
    }
    return -1;
}