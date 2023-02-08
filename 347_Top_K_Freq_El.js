/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {};

    for(let num of nums){
        if(num in freq) freq[num] += 1;
        else freq[num] = 1;
    };
    let list = [];
    let freqEntries = Object.entries(freq);
    let sorted = freqEntries.sort((a,b) => b[1]-a[1]);
    let i = 0;
    while(i < k){
        list.push(sorted[i][0]);
        i++;
    }
    return list;
};

/**
 Problem
 - given an array of nums and an integer k which would the rankings so up until which most frequent character

 Test Case
 - [1,1,1,2,2,3], k = 2
  ==> [1,2]
 
 PsuedoCode
 - Make a freq counter
 - Iterate through everything
 - get object entries, sort by the highest frequency
 - until the k value, get the index 0 and pass it in
*/