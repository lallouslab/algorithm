// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = str => {
  let int = "";
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    if ((str[i] < "0" || str[i] > "9") && str[i] !== "+" && str[i] !== "-")
      break;
    if (i === 0) {
      int += str[i];
    } else {
      if (str[i] >= "0" && str[i] <= "9") int += str[i];
      else break;
    }
  }
  if (Number(int) > 2 ** 31 - 1) return 2 ** 31 - 1;
  else if (Number(int) < -(2 ** 31)) return -(2 ** 31);
  else if (Number.isInteger(Number(int))) return Number(int);
  else return 0;
};

console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("42"));
2147483646;
1073741824;
