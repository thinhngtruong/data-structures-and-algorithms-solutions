/**
 * Problem: https://leetcode.com/problems/number-of-recent-calls/
 * Time: O(n)
 * Space: O(n)
 *
 **/

var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};
