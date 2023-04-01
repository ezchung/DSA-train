/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
};

/**
What are the things that we will need to know
- the highest difference
- look at the start number
- look at the end number

declare currentMaxOutput = 0;
two pointers method
iterate through array from i to length-2
    iterate through from j as i+1 to length-1
        check the difference. 
        if greater than 0, check if greater than currentMaxOutput

return currentMaxOutput
*/