//leetcode.com/problems/integer-to-roman/

https: /**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const ones = "IXCM",
    fives = "VLD";
  let ans = "",
    i = 0,
    k = 0,
    mod5 = 0;
  while (num) {
    k = num % 10;
    mod5 = k % 5;
    ans = (mod5 < 4 ? ones[i].repeat(mod5) : "") + ans;
    ans = (k >= 4 && k < 9 ? fives[i] : "") + ans;
    ans = (k === 9 ? ones[i + 1] : "") + ans;
    ans = (mod5 === 4 ? ones[i] : "") + ans;
    num = parseInt(num / 10);
    i++;
  }
  return ans;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
