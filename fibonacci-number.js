/* 
 * Problem: https://leetcode.com/problems/fibonacci-number/
 * Space: O(n)  
 * Time: O(n)
*/
var fib = function (n) {
  let f = new Array(n + 1);
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1]
  }
  return f[n]
};

/**
 * Two pointer approach
 * Space: O(1)  
 * Time: O(n)
 */
 var fib = function(n) {
  if(n <= 1) return n
  let prev1 = 1;
  let prev2 = 0;
  let cur
  for(let i=2; i <= n; i++) {
      cur = prev1 + prev2;
      prev2 = prev1;
      prev1 = cur;
  }
  return cur
};