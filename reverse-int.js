/**
 * Problem: https://leetcode.com/problems/reverse-integer/
 * Space: O(1)
 * Time: O(n)
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let str = x.toString().split('');
  let startIndex = 0;
  if(str[0] === '-') {
      startIndex = 1;
  } 
  let length = startIndex ? str.length + 1 : str.length
  for(let i = startIndex; i < length/2 ; i++) {
      [str[i], str[length - i - 1]] = [str[length-i-1], str[i]]; 
  }
  let result =  parseInt(str.join(''));
  if(result < Math.pow(-2,31) || result > Math.pow(2,31) -1) return 0;
  return result;
};