//https://leetcode.com/problems/longest-substring-without-repeating-characters/

const str = 'abcabcbb';

const slidingWindow = str => {
  const n = str.length;
  let i = 0, j = 0;
  let ans = 0;
  let set = []; // set of chars s[i] ~ s[j]
  while (i < n && j < n) {
    if (!set.includes(str[j])) {
      set.push(str[j++]);
      ans = Math.max(ans, j - i);
    } else {
      set.shift();
      i++;
    }
  }
  return ans;
}

const optButSlowSlidingWindow = str => {
  const n = str.length;
  let set = [];
  let i = 0, j = 0, ans = 0;
  while(i < n && j < n) {
    if(!set.includes(str[j])) {
      set.push(str[j++]);
      ans = Math.max(ans, j - i);
    } else {
      const k = set.indexOf(str[j]);
      set.splice(0, k + 1);
      i += k + 1;
    }
  }
  return ans;
}

console.log(slidingWindow(str));
console.log(optButSlowSlidingWindow(str));