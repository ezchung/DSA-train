/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(arr){
        if(arr.length <= 1) return arr;
        let mid = Math.floor((arr.length)/2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right){
        let sorted = [];
        while(left.length && right.length){
            if(left[0] < right[0]){
                sorted.push(left.shift());
            }else{
                sorted.push(right.shift());
            }
        }
        return [...sorted, ...left, ...right];
    }

    return mergeSort(nums);
};

/*
nLogN usually represents binary search

Psuedo
split the array in two 
and we sort by bottom level
and as we come back up
    if left side element is less than the right side, then stay.
        so until one side's pointer has reached its end, we add
        after we add the remaining to the array and go back up

Code
    let mid = Math.floor((nums.length-1)/2)
    let newArray = []
        if(array.length === 1 or 0)
            return array
        side1 = sort(array.slice(0,mid))
        side2 = sort(array.slice(mid))
        iterate through both and sort
        let side1Pointer = 0;
        let side2Pointer = 0;
        while(side1P & side2P <= side1.length & side2.length)
            isSide1Greater = side1[s1P] >= side2[s2P]
            if(isSide1Greater)
                newArray.push(side1[s1P])
                s1P++;
            else
                newArray.push(side2[s2p])
                s2P++;
        find which one has more left and add the rest
        remaining = side2P === side2.length-1 ? side1.slice(s1P)  : side2.slice(s2P) 
        newArray.push(...remaining)
        return newArray
    
*/

/*
mergeSort => nLogN
== Given array, divide and conquer approach
split into two functions
    recursive mergeSort
        where we split into individual elements
    merge
        where we combine
    mergeSort on both left and right
    merge at the end of two 
        get the arr, left, mid, right
        get the two sides
        make pointers
        the while loop

var sortArray = function(nums) {

    function mergeSort(arr){
        if(arr.length <= 1) return arr;
        let mid = Math.floor((arr.length-1)/2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(l,r){
        let sorted = [];
        while(l.length && r.length){
            if(l[0] <= r[0]){
                sorted.push(l.shift()) //gets me the first
            }else{
                sorted.push(r.shift())
            }
        }
        //give me sorted and the rest of whatever remains
        return [...sorted,...left,...right]
    }
    return mergeSort(nums);    
};

quicksort => nLogN

heapSort => nLogN

BST
*/