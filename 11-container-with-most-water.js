// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let ans = 0;
  const n = height.length;
  let i = 0, j = n - 1;
  while(i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) i++;
    else j--;
  }
  return ans;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
