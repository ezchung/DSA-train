# Intermediate Sorting Algorithms
- Family of sorting algorithms that improve time complexity from O(n^2) to O(n log n)
    - Will show where the n comes from in n log n
### Merge Sort
- Created by Jonathan Van Noimen. The first idea of merge sort
- Combination of three things: splitting, merging, and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (Divide and Conquer)

Ex.
[8,3,5,4,7,6,1,2] => [8,3,5,4], [7,6,1,2] => [8,3], [5,4]... => [8], [3], [5], [4]...
[3,8],[4,5]... => [3,4,5,8], [1,2,7,6]

First Step: Merging Function


### Quick Sort

### Radic Sort
