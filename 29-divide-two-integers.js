https://leetcode.com/problems/divide-two-integers

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  if (dividend === -2147483648 && divisor === 1) return dividend;
  let a = Math.abs(dividend),
    b = Math.abs(divisor),
    res = 0;
  for (let i = 31; i >= 0; i--) {
    if (Math.abs(a >> i) >= b) {
      a -= b << i;
      res += 1 << i;
    }
  }
  return (Math.sign(dividend) === 1) ^ (Math.sign(divisor) === 1) ? -res : res;
};

// console.log(divide(10, 3));
// console.log(divide(10, -3));
// console.log(divide(-10, 3));
console.log(divide(7, -3));
