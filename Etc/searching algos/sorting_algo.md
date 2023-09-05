# Elementary Sorting Algorithms
Sorting 
- Process of rearranging the items in a collection so that the items are in some kind of order
- Examples
    - Sorting by smallest to largest, alphabetically, movies based on revenue
- Purpose
    - Sorting is a common task
    - Even with built in sort methods, good to know what algo it is using and you can know what it is good at and bad at.
    - Good critical thinking
    - Many different ways to sort things and techniques that have their own advantages and disadvantages

Different Sorting Algos
Selection Sort
Insertion Sort
Merge Sort
Heap Sort
Radic Sort
Bubble Sort
Bogo Sort
Quick Sort

Elementary of these sorting algos
- Bubble sort
- selection sort
- insertion sort

Built In JS Sort method
- [6,4,15,10].sort()
    > [10,15,4,6]
        - becasue based on unicode, everything is converted into a string first and then sorted

- Telling JS how to sort
    > accepts an optiomal comparator function
    > the comparator looks at pairs of elements (a and b) determines their sort order based on the return value. 
        - if it returns negative number, a should come before b
        - if returns positive number, a should come after b
        - If returns 0, a and b are the same as far as the sort is concerned

function numberCompare(num1,num2){
    return num1-num2;
}
[6,4,15,10].sort(numberCompare); //[4,6,10,15] so a-b creates ascending order

function compareByLen(str1, str2){
    return str1.length-str2.length
}
//sorts by length in ascending order
Big O = O(NlogN)

BubbleSort
- Compare to next item. If first larger, swap with next. Continue through line
    > Largest value is created and established
    > Largest value bubbled or sinked to the top or the end respectively
- Repeat process from beginning 
>> [29,10,14,30,37,14,18] ==> After first iteration [10,14,29,30,14,18,37] ==> [10,14,29,14, 18,30,37]
- A sorting algorithm where the largest values bubbles up to the top

Ways to swap
function swap(arr,idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp
}
or
let swap = (arr,idx1,idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]];
}

Bubble Sort PsuedoCode
- Start looping from with a variable called i at the end of the array towards the beginning
- Start inner loop with variable j from teh beginning of array until i-1
- If arr[j] is greater than arr[j+1], swap
- Return sorted array

Implementation