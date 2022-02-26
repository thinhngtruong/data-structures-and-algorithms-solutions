/**
 * Problem: https://leetcode.com/problems/single-number/
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}rn anything, modify s in-place instead.
 */
var singleNumber = function(nums) {
    let result = 0;
    for(let num of nums) {
        result ^= num;
    }
    return result;
};