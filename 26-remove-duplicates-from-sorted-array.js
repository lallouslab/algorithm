// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i && nums[i] === nums[i - 1]) nums.splice(i-- - 1, 1);
  }

  return nums.reduce((prev, val, i, arr) => {
    if (i === 0) return [val];
    if (val !== arr[i - 1]) return [...prev, val];
    return prev;
  }, []);
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
