/* 
  Problem: https://leetcode.com/problems/fibonacci-number/
  Space: O(n)  
  Time: O(n)
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