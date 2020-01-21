// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const ones = "IXCM",
    fives = "VLD",
    len = s.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    const j = ones.indexOf(s[i]);
    const k = fives.indexOf(s[i]);
    if (j > -1) {
      if (i + 1 < len && (s[i + 1] === ones[j + 1] || s[i + 1] === fives[j])) {
        ans -= 10 ** j;
      } else {
        ans += 10 ** j;
      }
    } else {
      ans += 5 * 10 ** k;
    }
  }
  return ans;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
