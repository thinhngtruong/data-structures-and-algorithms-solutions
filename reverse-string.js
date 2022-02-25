/**
 * Problem: https://leetcode.com/problems/reverse-string/
 * Time: O(n)
 * Space: O(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i =0; i < s.length/2; i++) {
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
    }
};