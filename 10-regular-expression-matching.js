// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} text
 * @param {string} pattern
 * @return {boolean}
 */
const isMatch = (text, pattern) => {
  const pp = new RegExp(`^${pattern}$`);
  return pp.test(text);
};

console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("mississippi", "mis*is*p*."));


/**
 * @param {string} text
 * @param {string} pattern
 * @return {boolean}
 */
const isMatchDP = (text, pattern) => {
  const lt = text.length,
    lp = pattern.length;
  let dp = [];
  for (let i = 0; i <= lt; i++) dp.push(Array(lp + 1).fill(false));
  dp[lt][lp] = true;
  for (let i = lt; i >= 0; i--) {
    for (let j = lp - 1; j >= 0; j--) {
      const ijMatch = i < lt && (text[i] === pattern[j] || pattern[j] === ".");
      if (j <= lp - 2 && pattern[j + 1] === "*") {
        dp[i][j] = dp[i][j + 2] || (ijMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = ijMatch && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0];
};

console.log(isMatchDP("aa", "a")); // false
console.log(isMatchDP("aa", "a*")); // true
console.log(isMatchDP("ab", ".*")); // true
console.log(isMatchDP("aab", "c*a*b")); // true
console.log(isMatchDP("mississippi", "mis*is*p*.")); // false