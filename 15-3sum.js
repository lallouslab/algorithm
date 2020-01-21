// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = nums => {
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s > 0) right--;
      else if (s < 0) left++;
      else {
        ans.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[++left]);
        while (nums[right] === nums[--right]);
      }
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
