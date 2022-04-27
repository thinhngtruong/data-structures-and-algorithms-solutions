/**
 * Problem: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} sentence
 * @return {boolean}
 **/
var checkIfPangram = function (sentence) {
  let set = new Set();
  for (const char of sentence) {
    set.add(char);
  }

  return set.size === 26;
};
