// https://leetcode.com/problems/subarrays-with-k-different-integers/

class Window {
  constructor() {
    this.map = new Map();
    this._totalLength = 0;
  }

  add(val) {
    if (this.map.has(val)) {
      this.map.set(val, this.map.get(val) + 1);
    } else {
      this.map.set(val, 1);
    }
    this._totalLength++;
  }

  remove(val) {
    let cnt = this.map.get(val) - 1;
    if (cnt === 0) {
      this.map.delete(val);
    } else {
      this.map.set(val, cnt);
    }
    this._totalLength--;
  }

  distincts() {
    return this.map.size;
  }

  totalLength() {
    return this._totalLength;
  }
}

const solve = (A, K) => {
  const window1 = new Window(),
    window2 = new Window();
  let ans = 0;
  const n = A.length;
  for (let i1 = 0, i2 = 0, j = 0; j < n; j++) {
    window1.add(A[j]);
    window2.add(A[j]);
    while (window1.distincts() > K) window1.remove(A[i1++]);
    while (window2.distincts() >= K) window2.remove(A[i2++]);
    ans += window1.totalLength() - window2.totalLength();
  }
  return ans;
};

const A = [1, 2, 1, 2, 3],
  K = 2;

console.log(solve(A, K));
