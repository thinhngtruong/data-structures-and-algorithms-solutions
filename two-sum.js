/**
 * Problem: https://leetcode.com/problems/two-sum/
 * Using map
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 **/
var twoSum = function(nums, target) {
    let map = {};
    for(let i =0; i < nums.length; i++) {
        if(typeof map[nums[i]] === 'undefined') {
            map[target-nums[i]] = i;
        } else {
            return [map[nums[i]], i]
        }
    }
};