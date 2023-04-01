/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxOutput = 0;
    if(prices.length < 2) return maxOutput;
    for(let i = 0; i < prices.length-1; i++){
        for(let j = i+1; j < prices.length; j++){
            let diff = prices[j]-prices[i];
            if(diff > 0) maxOutput = Math.max(diff, maxOutput);
        }
    }
    return maxOutput;
};

/**
What are the things that we will need to know
- the highest difference
- look at the start number
- look at the end number

Possible sliding window solution (non-fixed window)
iterate through nums array
    start an array at 0 to the next number,
        get difference of first to last of array
        if negative number, increase first by 1, add new num to sumArr
        and subtract the previous number
        else see if greater than currentMaxProfit
            if yes, continue
            else, go

maxProfit = 0;
start, end = 0;
while end < array length
    end += 1
    if first - last is negative, then increase start by 1
    if postive, check max and continue

declare currentMaxOutput = 0;
two pointers method
iterate through array from i to length-2
    iterate through from j as i+1 to length-1
        check the difference. 
        if greater than 0, check if greater than currentMaxOutput

return currentMaxOutput
*/