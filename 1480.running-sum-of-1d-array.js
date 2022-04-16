/**
 * Problem: https://leetcode.com/problems/running-sum-of-1d-array/
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 **/
 var runningSum = function(nums) {
  let sum = [];
  for(let i = 0; i < nums.length; i++) {
    if(i == 0) {
      sum.push(nums[i]);
    } else {
      sum.push(sum[i-1] + nums[i])
    }
  }
  return sum;
};