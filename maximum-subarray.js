/**
 * Problem: https://leetcode.com/problems/maximum-subarray/
 * Time: O(n)
 * Space: O(1)
 */ 

 var maxSubArray = function(nums) {
  let prev = 0;
  let max = -Infinity;
  for(number of nums) {
    prev = Math.max(prev + number, number);
    max = Math.max(max, prev);
  }
  return max;
};