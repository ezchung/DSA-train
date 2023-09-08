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

Call Stack Imagery
                                mergeSort[10,24,76,73]
                    [10,24]                    merge                [73,76]
                mergeSort([10,24])                              mergeSort([76,73])  
        [10]        merge       [24]                    [76]        merge       [73]
    mergeSort([10])         mergeSort([24])         mergeSort([76])         mergeSort([73])   

- Time Complexity
>> Best/Avg/Worst Time Complexity: O(n log n)
    - Unlike bubble sort, where unless data is already sorted, big O is upgraded to linear time
    - Doesnt matter for mergeSort
    >> Why n log n
    [8]     [3]     [5]     [4]     [7]     [6]     [1]     [2]                              
        [3,8]           [4,5]           [6,7]           [1,2]
                [3,4,5,8]                       [1,2,6,7]
                            [1,2,3,4,5,6,7,8]
        - moving upwards
            - a decomposition every level. With n as 8, have to split 3 times. With n as 32, have to split 16, 16, then ,8 8 8 8, eight 4s, 16 2s, 32 1s.
            - log n decompositions
            - as n grows, the number of times we have to split it up increase log n
        - O(n) comparisons per decomposition
            - at every level, there are n number of comparisions. As n grows, the merge function has O(n)

>> Space: O(n)

### Quick Sort
- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted 
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is position appropriately, quick sort can be applied to both sides of the pivot

Example
                        [5,2,1,8,4,7,6,3]
                        pivot is chosen as 5
                        [ , , , ,5, , , ]
                        all the numbers less than 5 moved to the left of the 5 and rest to the right
                        3,2,1,4     7,6,8
                        recursively repeat process
                    choosing 3        choosing 7
                        1,2     4       6           8
            choosing 1
                        2
    >>During each decomposition, registering which ones are less than pivot (which becomes cemented after that decomposition)

First Step: Pivot Helper Function or Partision 
- In order to implement merge sort, use to first implement a function responsible arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are mvoed to the left of the pivot and all values greater than the pivor are moved to the right of the pivot
- The order fo elements on either side of the pivot don't matter
- The helper should do this in place, that is, it should not create a new array
- When complete, the helper should return the index of the pivot
>> Picking a pivot
    - The runtime of quick sort depends in part on how one selects the pivot
    - Ideally the pivot should be chosen so that it ius roughly the median value in the data set you're sorting
        - Tough to pick the median number because its not sorted
    - There are differences with the different pivots
        - For example, picking the first element. There will be consequences.

let arr = [5,2,1,8,4,7,6,3]
pivot(arr); //4 which is the index of where 5 belongs
arr;
/* May look like any of these but as long as 5 is in the correct position and the ones that are less than 5 are left of 5 and vice versa for greater than 5
[2,1,4,3,5,8,7,6] same as [4,1,2,3,5,6,8,7]
In the final sorted array, 5 is in its final position
*/
    >> PsuedoCode
        - Helps to accept three arguments: an array, start index, and an end index. defualts to 0 and array length -1 
        - Grab the pivot from the start of the array
        - Store the current pivot index in a variable (this will keep track of where hte pivot should end up)
        - Loop through the array from the start until the end
            - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
        - Swap the starting element (i.e the pivot) with the pivot index
        - Return the pivot index
            - Determined by how many things need to be left of the pivot. The position of pivot is swapped to the location
            
<<IMPLEMENTATION>>




### Radic Sort
