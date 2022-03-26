/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Space: O(1)
 * Time: O(n)
 * 
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  if(prices.length == 0) return 0;
  let min = prices[0];
  let max = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < prices.length; i++){
      let money = prices[i] - min;
      max = Math.max(max, money);
      min = Math.min(min, prices[i])
  }

  return max;
};