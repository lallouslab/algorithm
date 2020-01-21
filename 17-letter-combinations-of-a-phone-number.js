// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (digits.length === 0) return [];
  const map = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];

  let ans = [],
    t = 0;
  ans.push([""]);
  ans.push([]);

  for (let i = 0; i < digits.length; i++) {
    ans[1 - t] = [];
    for (let j = 0; j < ans[t].length; j++) {
      for (let k = 0; k < map[Number(digits[i])].length; k++) {
        ans[1 - t].push(ans[t][j] + map[Number(digits[i])][k]);
      }
    }
    t = 1 - t;
  }
  return ans[t];
};

console.log(letterCombinations("23"));
