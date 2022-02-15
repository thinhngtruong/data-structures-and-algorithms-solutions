/**
 * Problem: https://leetcode.com/problems/min-cost-climbing-stairs/
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  if(cost.length == 1) return cost[0]
  let f = new Array(cost.length)
  f[0] = cost[0];
  f[1] = cost[1];
  for(let i = 2; i < cost.length; i++) {
      f[i] = cost[i] + Math.min(f[i-1], f[i-2]);
  }
  return Math.min(f[cost.length-1], f[cost.length-2])
};