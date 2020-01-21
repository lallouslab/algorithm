// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1, nums2) => {
  let l1 = nums1.length,
    l2 = nums2.length;
  if (l1 > l2) {
    [l1, l2] = [l2, l1];
    [nums1, nums2] = [nums2, nums1];
  }

  let i, j;
  let imin = 0,
    imax = l1,
    halflen = parseInt((l1 + l2 + 1) / 2);
  while (imin <= imax) {
    i = parseInt((imin + imax) / 2);
    j = halflen - i;
    if (i > imin && nums1[i - 1] > nums2[j]) {
      imax = i - 1;
    } else if (i < imax && nums1[i] < nums2[j - 1]) {
      imin = i + 1;
    } else {
      let maxLeft = 0;
      if (i === 0) maxLeft = nums2[j - 1];
      else if(j === 0) maxLeft = nums1[i - 1];
      else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

      if ((l1 + l2) % 2) return maxLeft;

      let minRight = 0;
      if (i === l1) minRight = nums2[j];
      else if (j === l2) minRight = nums1[i];
      else minRight = Math.min(nums1[i], nums2[j]);

      return (maxLeft + minRight) / 2;
    }
  }
  return null;
};

const arr1 = [1, 3],
  arr2 = [2];

console.log(findMedianSortedArrays(arr1, arr2));
