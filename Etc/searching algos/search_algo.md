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

- Searching for substrings in a larger string
Naive String Searching Algo
- most basic way of doing problem above
- Suppose you want to count the number of times a smaller string appears 

PsuedoCode
- function takes two strings
    - Loop over the longer string
    - Loop over the shorter string
    - If chars don't match, break out of inner loop
    - If match, keep going
    - If complete the inner loop and find match, increment the count of matches
- return count

Solution
```JS
function naiveSearch(long, short){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i]){
                break;
            }
            if(j === short.length -1){
                count++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")
```

KMP string searching
- The basic idea behind KMP’s algorithm is: whenever we detect a mismatch (after some matches), 
we already know some of the characters in the text of the next window. We take advantage of 
this information to avoid matching the characters that we know will anyway match. 