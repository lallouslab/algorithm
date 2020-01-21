// https://leetcode.com/problems/longest-palindromic-substring/

const findAround = (s, sLen, l, r) => {
  for (; l >= 0 && r < sLen && s[l] === s[r]; l--, r++);
  l++, r--;
  return r - l + 1;
};

const longestPalindrome = s => {
  let st = 0,
    en = 0,
    maxLen = 0,
    len = 0,
    sLen = s.length,
    i = parseInt(sLen / 2),
    j = i + 1;
  for (
    ;
    i >= parseInt(maxLen / 2) || j <= sLen - parseInt(maxLen / 2);
    i--, j++
  ) {
    len = Math.max(findAround(s, sLen, i, i + 1), findAround(s, sLen, i, i));
    if (len > maxLen) {
      maxLen = len;
      st = len % 2 ? i - (len - 1) / 2 : i - (len - 2) / 2; // parseInt(i - (len - 2) / 2)
      en = len % 2 ? i + (len - 1) / 2 : i + len / 2; // parseInt(i + len / 2)
    }
    len = Math.max(findAround(s, sLen, j, j + 1), findAround(s, sLen, j, j));
    if (len > maxLen) {
      maxLen = len;
      st = len % 2 ? j - (len - 1) / 2 : j - (len - 2) / 2; // parseInt(j - (len - 2) / 2)
      en = len % 2 ? j + (len - 1) / 2 : j + len / 2;  // parseInt(j + len / 2)
    }
  }
  return s.slice(st, en + 1);
};

const s = "abbac";
console.log(longestPalindrome(s));
