/*
Write a function which accepts an array of integers and a number called n. The function 
should calculate the maximum sum of n consecutive elements in the array

Get the max sum of any n consecutive numbers in the array.

Ex
maxSubarraySum([1,2,5,2,8,1,5],2) //10

*/

/*
Sliding Window approach

input: arr and n
output: int

add all the numbers from 0 to n
currentMax = the value above
firstPointer = 1;
secondPointer = n;
while secondPointer is not equal to the end of arr
    add the secondPointer's value
    subtract the firstPointer-1's value
    make the two lines above a single value and check if greater than current max
        adjust currentMax accordingly
    move both pointers up
*/

function maxSubarraySum([arr, n]){

}

/*
O(n^2)
would use a nested for loop

create variable max as -Infinity
iterate through arr as long as i < arr length - n
    with example above of 10
        i < 7 - 2 + 1 //purpose because by this idx we will know our answer and 
        a new answer cannot be made after this point
*/

function naiveMaxSubarraySum([arr,n]){
    if(n > arr.length) return null;

    let max = -Infinity;
    for(let i = 0; i < arr.length-n+1;i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i+j];
        }
        if(temp > max){
            max = temp;
        }
    }
    
    return max;
}