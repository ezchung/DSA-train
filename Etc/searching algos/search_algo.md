Linear Search 
- indexOf / includes / find / findIndex O(n)
- moving in one direction at a set interval. Checking every single thing
- PsuedoCode
    > This function accepts an array and value
    > Loop through the array and check if the current array element is equal to the value
    > If it is, return the index at which the element is found
    > If the value is never found, return -1
- Best Case: O(1) finding it right away
- Worst Case: O(n)

Binary Search
- Rather than eliminating one element at a time, can elimiate half of the remaining elements at a time
- only works on sorted arrays
- Divide and Conquer Methods
    > As long as we can compare in some way on the sorted array. Can implement binary search
- PsuedoCode
    > Function takes sorted arr and value
    > Create left pointer at start of array, right pointer at the end of the array
    > While left pointer comes before the right pointer
        > get the middle position between left and right pointer
        > if middle value is what you want, return index
        > if too small, move left up
        > if too large, move right pointer down
    > If never find, return -1
- Big O on array
    > Best Case: O(1)
    > Worst Case: O(log n)
        - Dividing the iterating venue by half
        - 16 elements => 7 elements => 3 elements => 1 element
            4 steps. Took 4 steps 
        - 32 elements 
            5 steps
        - log base 2 n
            - 2^4 = 16
                - log base 2 16 = 4
Niave String Searching Algo
KMP string searching