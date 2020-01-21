// https://leetcode.com/problems/4sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  let ans = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 3; i++) {
    while (i > 0 && nums[i] === nums[i - 1]) i++;
    const threes = threeSum(nums, target - nums[i], i + 1, n);
    threes.forEach(three => ans.push([nums[i], ...three]));
  }
  return ans;
};

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @param {number} n
 */

const threeSum = (nums, target, start, n) => {
  let ans = [];
  for (let i = start; i < n - 2; i++) {
    while (i > start && nums[i] === nums[i - 1]) i++;
    let left = i + 1,
      right = n - 1;
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s > target) right--;
      else if (s < target) left++;
      else {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[++left]);
        while (left < right && nums[right] === nums[--right]);
      }
    }
  }
  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
console.log(fourSum([0, 0, 4, -2, -3, -2, -2, -3], -1));
