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

/*
Binary Search (Divide & Conquer)
O(logN)

[1,2,3,5,6,8,9,12,15,16,29], 15
Pick middle point. Check if greater or less than middle number

*/

function searchBinary(arr,val){
    let min = 0;
    let max = arr.length-1;

    while(min <= max){
        let mid = Math.floor((min+max) / 2);
        let curr = arr[mid];

        if(arr[mid] < val){
            min = mid+1;
        }else if (arr[mid] > val){
            max = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}