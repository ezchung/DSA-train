/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    if(nums.length === 0) return [];
    let ans = nums.concat(nums)
    let ans2 = [...nums,...nums];
    return ans;
};

/** Another
 * Create a new empty array ans. Begin by iterating through the array nums. 
 * On each iterator i add the current element onto the end of ans. We use the 
 * modulo operator % which will come into effect once i is greater than input length. 
 * Once the iteration is complete, return ans.
 */
var getConcatenation = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length * 2; i++) {
        ans[i] = nums[i % nums.length];
    }
    return ans;
};


