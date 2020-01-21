// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (strs.length === 0 || strs[0].length === 0) return "";
  let ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return ans;
    }
    ans += strs[0][i];
  }
  return ans;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
