// https://leetcode.com/problems/3sum-closest

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let ans = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (Math.abs(s - target) < Math.abs(ans - target)) ans = s;
      if (s > target) right--;
      else if (s < target) left++;
      else return target;
    }
  }
  return ans;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
