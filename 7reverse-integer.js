// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sgn = Math.sign(x);
  let y = 0;
  x = Math.abs(x);
  while (x) {
    y = y * 10 + (x % 10);
    if (y > 2 ** 31 - 1 || y < -(2 ** 31)) return 0;
    x = parseInt(x / 10);
  }
  return sgn * y;
};

console.log(reverse(1563847412));
console.log(reverse(123));
