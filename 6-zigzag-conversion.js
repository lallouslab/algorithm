// https://leetcode.com/problems/zigzag-conversion/

const convert = (s, numRows) => {
  if (numRows === 1) return s;
  let ans = Array(numRows).fill("");
  const sLen = s.length;
  let step = 1;
  for (let i = 0, j = 0; i < sLen; i++) {
    ans[j] += s[i];
    j += step;
    if (j === numRows) {
      j = numRows - 2;
      step = -1;
    } else if (j === -1) {
      j = 1;
      step = 1;
    }
  }
  return ans.join("");
};

let s = "PAYPALISHIRING",
  numRows = 3;
console.log(convert(s, numRows));
s = "PAYPALISHIRING";
numRows = 4;
console.log(convert(s, numRows));
