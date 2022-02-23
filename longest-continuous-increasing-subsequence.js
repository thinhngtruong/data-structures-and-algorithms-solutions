/**
 * Problem: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 * Time: O(n);
 * Space: O(1);
 **/
var findLengthOfLCIS = function(nums) {
    let max = 1;
    let count = 1;
    for(let i=0; i < nums.length-1; i++) {
        if(nums[i] < nums[i+1]) {
            count++;
            max = Math.max(count, max)
        } else {
            count = 1;
        }
    }
    return max
};

