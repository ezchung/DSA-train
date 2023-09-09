# Elementary Sorting Algorithms

## Sorting
- Process of rearranging the items in a collection so that the items are in some kind of order.
- Examples:
    - Sorting from smallest to largest, alphabetically, movies based on revenue.
- Purpose:
    - Sorting is a common task.
    - Even with built-in sort methods, it's good to know what algorithm is being used and understand its strengths and weaknesses.
    - Develops critical thinking skills.
    - Many different ways to sort things, each with its own advantages and disadvantages.

### Different Sorting Algorithms
- Selection Sort
- Insertion Sort
- Merge Sort
- Heap Sort
- Radix Sort
- Bubble Sort
- Bogo Sort
- Quick Sort

### Elementary Sorting Algorithms
- Bubble sort
- Selection sort
- Insertion sort

### Built-In JavaScript Sort Method
- Example: `[6, 4, 15, 10].sort()`
    - Result: `[10, 15, 4, 6]`
        - Because based on Unicode, everything is converted into a string first and then sorted.

- Telling JS How to Sort
    - Accepts an optional comparator function.
    - The comparator looks at pairs of elements (a and b) and determines their sort order based on the return value.
        - If it returns a negative number, `a` should come before `b`.
        - If it returns a positive number, `a` should come after `b`.
        - If it returns 0, `a` and `b` are considered the same as far as the sort is concerned.

```JS
function numberCompare(num1,num2){
    return num1-num2;
}
[6,4,15,10].sort(numberCompare); //[4,6,10,15] so a-b creates ascending order

function compareByLen(str1, str2){
    return str1.length-str2.length
}
//sorts by length in ascending order
//Big O = O(NlogN)
```

## BubbleSort

BubbleSort is a simple sorting algorithm that repeatedly steps through the list, 
compares adjacent elements, and swaps them if they are in the wrong order. The pass 
through the list is repeated until no swaps are needed, which means the list is sorted.
- A sorting algorithm where the largest values bubbles up to the top

### How It Works
- Compare each element to the next one.
- If the first element is larger than the next one, swap them.
- Continue comparing and swapping until the largest value "bubbles up" to the end of the list.
- Repeat the process from the beginning for the remaining unsorted part of the list.

- Compare to next item. If first larger, swap with next. Continue through line
    > Largest value is created and established
    > Largest value bubbled or sinked to the top or the end respectively
- Repeat process from beginning 
- [29,10,14,30,37,14,18] ==> After first iteration [10,14,29,30,14,18,37] ==> [10,14,29,14, 18,30,37]

### Ways to swap
```JS
function swap(arr,idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp
}
//or
let swap = (arr,idx1,idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

### Bubble Sort PsuedoCode
- Start looping from with a variable called i at the end of the array towards the beginning
- Start inner loop with variable j from the beginning of array until i-1
- If arr[j] is greater than arr[j+1], swap
- Return sorted array

### Implementation
Less optimized version (two nested loops)
```JS
function bubbleSort(arr){
    for(let i = 0; i < arr.length, i++){
        for(let j = 0; j < arr.length, j++){
            if(arr[j] > arr[j+1]){
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
//checks all the way to end even though we already know the highest was bubbled up
//Optimized Version 
function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0, i--){
        noSwaps = true;
        for(let j = 0; j < i-1, j++){
            if(arr[j] > arr[j+1]){
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                //or
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr
}
```

let a = 1, b =2,
[a,b] = [b,a] ==> a = 2, b = 1

### Optimization
- when it has already been set in order, what to do instead of continuing the loop
    > [8,1,2,3,4]
    > Add line
        - If no swaps, break
### Time Complexity
- Worst Case: O(n^2)

## Selection sort
- Similar to bubble sort, but instead of firstplacing large values into sorted position, it places smallest values into sorted position
- [5,3,4,1,2] ==> find min value and move to front [1,3,4,5,2]
- Only make one swap at the end of loop. Selection sort is better than bubble sort if want to minimize the number of swaps. Bubble sort requries you to swap over and over. selection iterates and compares a lot but only makes one swap in the end.

### PsuedoCode
- Store the first element as the smallest value so far
- Compare this item to the next item in the array until you find a smaller number
    - If smaller number is found, designate that smaller number to be new min and continue until the end of the array.
    - If min is not the value (idx) you initially began with, swap the two values
- Start from the next position from the beginning (shrinking the window)

### Implementation
```JS
function selectionSort(arr){
    for(let i = 0; i < arr.length, i++){
        let minIdx = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        if(minIdx !== i){
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }

    return arr;
}
selectionSort([34,22,10,19,17])
```

### Time Complexity
- O(n^2) because have to compare every element with every other element

## Insertion Sort
- Similar to selection and bubble, insertion does some things well
- Builds up the sort by gradually creating a larger left half which is always sorted
- [5,3,4,1,2] => [3,5,4,1,2] => [3,4,5,1,2] 
- Gradually putting the numbers in the right place. Take the newest and compare to the left value and then continue if condition satisfied.

### Time Complexity: O(N^2)
- Good at online algorithm (numbers getting sorted in along the way)

### PsuedoCode
- Start by picking the second element in the array
- Compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted

> for i : 1 to length Arr - 1
    j = i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j = j-1

### Implementation
```JS
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currVal;
        console.log(arr);
    }
    return arr;
}
```

[1,2,9,76,4] => [1,2,9,76,4] = [1,2,9,76,4] = [1,2,4,9,76] = [1,2,4,9,76]

## Comparing the 3 Elementary Sorts
- Algorithm (Quadratic Sorting Algorithms)
    - Bubble Sort: nice when almost sorted
    - Insertion Sort: nice when almost sorted 
    - Selection Sort: doesnt matter that almost sorted since looking at everything for lowest
        = Nearly Sorted: Bubble and insertion perform better than selection 
        - Space Complexity: O(1)
            - Other algorithms take up more space as it sometimes creates a smaller arrays like with mergeSort
    - Better when inputs are small in comparison to those sorting algos that are coming