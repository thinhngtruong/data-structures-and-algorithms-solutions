/**
 * Problem: https://leetcode.com/problems/min-stack/
 * 
var MinStack = function() {
    this.elements = [];
};

/** 
 * @param {number} val
 * @return {void}
 */

 MinStack.prototype.push = function(val) {
  this.elements.push({
      value: val,
      min: this.elements.length == 0 ? val : Math.min(val, this.elements[this.elements.length-1].min)
  })
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  return this.elements.pop().value
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.elements[this.elements.length -1].value
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length -1].min
};