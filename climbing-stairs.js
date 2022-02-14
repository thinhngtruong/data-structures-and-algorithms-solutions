/**
 * Problem: https://leetcode.com/problems/climbing-stairs/
 * Time: O(n)
 * Space: O(n)
 */ 

 var climbStairs = function(n) {
  let f = new Array(n + 1);
  f[0] = 0;
  f[1] = 1;
  for(let i = 2; i <= n+1; i++) {
    f[i] = f[i-2] + f[i-1]
  }
  return f[n+1]
};