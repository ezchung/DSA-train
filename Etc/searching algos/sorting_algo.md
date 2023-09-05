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