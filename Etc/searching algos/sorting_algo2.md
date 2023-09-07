# Intermediate Sorting Algorithms
- Family of sorting algorithms that improve time complexity from O(n^2) to O(n log n)
    - Will show where the n comes from in n log n
### Merge Sort
- Created by Jonathan Van Noimen. The first idea of merge sort
    > EDVAC, 23 pages of code back then in 1948
- Combination of three things: splitting, merging, and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (Divide and Conquer)

Ex.
[8,3,5,4,7,6,1,2] => [8,3,5,4], [7,6,1,2] => [8,3], [5,4]... => [8], [3], [5], [4]...
[3,8],[4,5]... => [3,4,5,8], [1,2,7,6]

First Step: Merging Function
- Input: Two separate arrays
>> Merging Arrays
    - In order to implement merge sort, useful to first implement a function responsible for merging two sorted arrays
    - Given two arrays whic hare sorted, this helper function should create a new array which is also sorted and consists of all of the elements in the two input arrays
    - Function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it. n and m are the sizes of the two arrays
>> Merging Arrays Pseudocode
    - Create empty array, take a look at the smallest values in each input array
    - While there are still values we haven't looked at...
        - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move onto the next value in the first array
        - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move onto the next value in the second array.
        - Once we finish one array, push all the remaining values of the other array into the new array
- Implementation
function merge(arr1, arr2){
    let res = [];
    let i = 0; //pointer for array1
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] < arr1[i]){
            res.push(arr2[j]);
            j++;
        }else{
            res.push(arr1[i]);
            i++;
        }
    }
    //res = [...res, ...(i >= arr1.length ? arr2.slice(j) : arr1.slice(i))];
    let remaining = i >= arr1.length ? arr2.slice(j) : arr1.slice(i);
    res.push(...remaining); // Spread remaining elements into res

    return res;
}

2nd Step: Sorting
Writing mergeSort (uses recursion)
PsuedoCode
    - Break up the array into halves until you have arrays that are empty or have one element (base case)
        - maybe using slice
        - call merge sort again and break into halves 
    - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    - Once the array has been merged back together, return the merged and sorted array

- Implementation
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    let res = merge(left,right);
    //console.log(res, "res", left,"left", right)
    return res;
}


### Quick Sort

### Radic Sort
