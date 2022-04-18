/**
 * Problem: https://leetcode.com/problems/richest-customer-wealth/
 * Time: O(n^2)
 * Space: O(n)
 * 
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  let max = 0;
  
  for(let account of accounts) {
    let sum = account.reduce((a,b) => a+b, 0);
    if(sum > max) max = sum;
  }
  return max;
};