/**
 * Problem: https://leetcode.com/problems/sum-of-unique-elements/
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const uniques = new Map();
  let total = 0;

  for (num of nums) {
    // the current num already been seen,
    // but not subtracted from the total.
    // set 'subtracted' state to true
    if (uniques.get(num) === false) {
      total -= num;
      uniques.set(num, true);
    }

    // the current num already been seen,
    // but already subtracted from the total.
    else if (uniques.get(num) === true) {
      continue;
    }

    // the number has not been seen,
    // add it to the total.
    // set 'subtracted' state to false
    else {
      total += num;
      uniques.set(num, false);
    }
  }

  return total;
};
