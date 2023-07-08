/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
    let left = 1,
        right = Math.max(...piles);
    let res = right;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let hours = 0;
        for(let pile of piles){
            hours += Math.ceil(pile/mid)
        }
        if(hours <= h){
            res = Math.min(res, mid);
            right = mid-1;
        }else{
            left = mid+1
        }
    }
    return res
};
/** Accepted */


/**
Problem
    Eat the bananas in h hours
    Determine the bananas per hour eating speed that koko should eat at

Notes
    key information
    - this must be true: len(p) <= h. the number of piles will be less than or equal to number of hours. Since we need to eat all bananas, but only one pile can be touched each hour

TestCase
piles = [3,6,7,11] h = 8
if k = 1, not going to work, first two piles will take already 9 hours
    minimum is 1perhour
if k = 11? will eat in 4 hours
but can we get the minimum k
1? X, 2? [1.5,3,3.5,5.5hrs] X, 3? [1,2,2.3,3.67] > 8 X, 4? [.75,1.5,1.75,2.75] = 6.75 Y


Code
Binary Search O(log(max(p)) * p)
Create list from lowest to highest possible k. 
res = ?
find the lowest and highest number in array. Can sort
middle k is determined by highest + lowest / 2
Go to the middle element if it satisfies the array, then go down. right is reassigned
if it doesnt, then left is reassigned
The actual algorithm to see if the k works
Look at first pile and divide by mid number. Round up
    continue and count the number of hours
    if k works, reassign res and reassign right
    if k doesnt work, reassign left
return res

Edge Cases
- if len(p) > h, return false
- if piles.length is one, lowest is 0

*/

/**
 * Runtime Error
 */

var minEatingSpeedRE = function(piles, h) {
    //Edge Cases
    if (piles.length === 1) {
        return Math.ceil(piles[0] / h);
    }

    let res = -1;
    //Create list
    let minOfPiles = Math.min(...piles)
    let maxOfPiles = Math.max(...piles)
    let possibleKs = [];
    for(let i = minOfPiles; i <= maxOfPiles; i++){
        possibleKs.push(i);
    }
    
    let left = 0;
    let right = possibleKs.length-1;

    while( left <= right){
        let midIdx = Math.floor((left+right)/2);
        let mid = possibleKs[midIdx];
        if(checkEatingTimeRE(mid,piles,h)){      
            res = mid;
            right = midIdx-1;
        }else{
            left = midIdx+1;
        }
    }
    return res;

};

function checkEatingTimeRE(speed,piles, h){
    //this will return true or false
    //create sum variable to check
    //while idx <= piles.length
        //if sum > h, return false
        //sum += Math.ceil(piles[idx]/speed)
    let sum = 0;
    let idx = 0;
    while(idx <= piles.length-1){
        sum += Math.ceil(piles[idx]/speed)
        if(sum > h) return false;
        idx++;
    }
    return true
}
