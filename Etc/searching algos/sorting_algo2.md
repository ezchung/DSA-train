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
function swap(arr, i, j) {
  // Use a temporary variable to hold the value at arr[i]
  const temp = arr[i];
  
  // Assign the value at arr[j] to arr[i]
  arr[i] = arr[j];
  
  // Assign the value from the temporary variable to arr[j]
  arr[j] = temp;
}

[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
- [arr[i], arr[swapIdx]] creates an array with two elements. The first element is arr[i], and the second element is arr[swapIdx].

- = is the assignment operator.
- [arr[swapIdx], arr[i]] creates another array with two elements, but this time the order is swapped compared to the first array. The first element is arr[swapIdx], and the second element is arr[i].
- Finally, the outer [...] brackets indicate destructuring assignment. This means that the two elements on the left side of the = operator will be assigned the values from the corresponding positions in the right-side array.

function pivot(arr,start=0, end=arr.length-1){
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){ //looking at the next
            swapIdx++;
            swap(arr,swapIdx,i);

        }
    }
    swap(arr,start, swapIdx)
    return swapIdx;
}
pivot([4,8,2,1,5,7,6,3])
[4,8,2,1,5,7,6,3]

<<PsuedoCode>>
- Call pivot helper on the array
- When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray of the right of the index.
- Your base case occurs when you consider a subarray with less than 2 elements

<<Implementation>>
function quickSort(arr,left = 0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr,left, right) //returning where the starting element belongs
        //left
        quickSort(arr,left,pivotIndex-1) //to not include the pivot index
        quickSort(arr,pivotIndex+1, right);
    }
    return arr; //quickSort of left is waiting on the previous quickSort. Return arr so we can get it back on those waiting
}

--Time Complexity
n log n
- Have to slice log n times. n comparisions per decomposition
Worst Case
- if pivot is in the front and already sorted, each decomposition is one item. leads to O(n^2)
    - or if pivot is the minimum or maximum every time
- Thats why we choose median or random number instead of first element every single time

### Radic Sort
- These are all comparison sort algorithms. Between two items ata given time, deciding which one comes first
- Bubble Sort: O(n^2)
- Insertion Sort: O(n^2)...
Can we do better? Yes, but not by doing comparison sorts
    - The best we can hope for in comparison sorts is O(n log n)
Solution (but only in certain cases)
- Integer sorting algorithms
- Radix Sort is one of these. Not making any direct comparisons. Sorting the data in a different way
    - Special sorting alogirthm that works on lists of numbers. Binary numbers so it is possible to use other data values just need to be converted to numbers first
    - Never makes comparisons between elements 
    - Exploits the fact that information about the size of a number is encoded in the number of digits
    - More digits means a bigger number
    How does it work
        [1556,4,2556,593, 408,4386,902,7,8157,86,9637,29]
        - Create buckets
            - go through entire list of numbers and look at rightmost digit and put them into their buckets
            - 0:    1:      2: [902]     3: [593]     4: [4]      5:       6: [1556,3556,4386,86]      7: [7,8157,9637]      8: [408]      9: [29]
            [902,593,4,1556,3556,4386,86,7,8157,9637, 408, 29]
            - now look at the second rightmost digit 
            - 0: [902,4,7,408]   1:      2: [29]     3: [9637]     4:      5: [1556,3556,8157]      6:      7:       8: [4386,86]      9: [593]
            - continue and will be sorted. Will continue based on the largest size digit
                - There was never a comparison between two items directly

<<Helper Methods>>
Radix Sort Helpers
- In order to implement radix sort, it's helpful to build a few helper functions first
- getDigit(num, place) - returns the digit in num at the given place value
    getDigit(29,1) //2
    getDigit(12345,0) //5
    getDigit(12345,5) //0 imagine as 012345

    Implementation for getDigit
    function getDigit(num,place){
        return Math.fllor(Math.abs(num) / Math.pow(10, i)) % 10;
    }
        - Math.abs is for negative numbers
        example: (7323,2)
            - 7323/100 = 73.23 ==> Math.floor(73.23) --> 73 % 10 = 3

- Figuring how many digits we need. Need to know how many times we need to sort everything.
- digitCount(num) = returns the nubmer fo digits in num
    - digitCount(1) //1
    - digitCount(3) //3
    Implementation
    function digitCount(num){
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1
    }
    - Math.log10(432) ==> 2.63...
        - number of 10s multiplied within itself needed to reach this number

- mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list 
    - mostDigits([1234, 56,7]) //4
    Implementation
    function mostDigits(nums){
        let maxDigits = 0;
        for(let i = 0; i < nums.length;i++){
            maxDigits = Math.max(maxDigits, digitCount(nums[i]));
        }
        return maxDigits;
    }

<<Implementation>>
#### PsuedoCode
- function that accepts list of numbers
    - figure out how many digits the largest number has. use mostDigits and digitCount
    - loop from k =0 to the largest number of digits
    - for each iteration of loop
        - create buckets for each digit(0 to 9)
        - place each number in the corresponding bucket based on its kth digit
    - Replace existing array with values in our buckets starting with 0 and going up to 9
    - return list at the end

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.fromt({length:10}, () => [])
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets); //gets that one level down of arrays and passes them as one
    }
    returns nums;
}

<<Big O Complexity>>
- O(nk) //n is the list size. k is the largest digit size
Space Complexity : O(n+k)