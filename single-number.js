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

/**
 * Map solution
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for(let num of nums) {
        map[num] = map[num] + 1 || 1;
    }
    for(let key in map) {
        if(map[key] === 1) return key;
    }
};