// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const recursive = (open, toOpen, curr, ans) => {
    if (toOpen === 0 && open === 0) ans.push(curr);
    if (toOpen > 0) recursive(open + 1, toOpen - 1, curr + "(", ans);
    if (open > 0) recursive(open - 1, toOpen, curr + ")", ans);
  };

  let ans = [];
  recursive(0, n, "", ans);
  return ans;
};

console.log(generateParenthesis(3));
