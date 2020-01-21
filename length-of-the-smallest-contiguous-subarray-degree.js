// https://www.filtered.ai/interview/playground/coding

const solve = str => {
  return str
    .split("\n")[1]
    .split(" ")
    .map(s => parseInt(s))
    .reduce((prev, val, i) => {
      const cur = JSON.parse(JSON.stringify(prev));
      const j = cur.findIndex(el => el.val === val);
      if (j >= 0) {
        cur[j].count++;
        cur[j].end = i;
      } else {
        cur.push({ val, count: 1, start: i, end: i });
      }
      return cur;
    }, [])
    .reduce(
      ({ minLength, maxCount }, { count, start, end }) => {
        if (maxCount < count) {
          maxCount = count;
          minLength = end - start + 1;
        } else if (maxCount === count) {
          minLength = Math.min(minLength, end - start + 1);
        }
        return { minLength, maxCount };
      },
      { minLength: Infinity, maxCount: 0 }
    ).minLength;

  const lines = str.split("\n");
  // const n = parseInt(lines[0]);
  const collectionMap = new Map();
  let maxCount = 0,
    minLength = Infinity;
  lines[1]
    .split(" ")
    .map(s => parseInt(s))
    .forEach((val, i) => {
      if (collectionMap.has(val)) {
        const { count, start } = collectionMap.get(val);
        collectionMap.set(val, { count: count + 1, start, end: i });
      } else {
        collectionMap.set(val, { count: 1, start: i, end: i });
      }
    });
  collectionMap.forEach(({ count, start, end }) => {
    if (maxCount < count) {
      maxCount = count;
      minLength = end - start + 1;
    } else if (maxCount === count) {
      minLength = Math.min(minLength, end - start + 1);
    }
  });

  // return minLength;
};

const str = `5
1 2 2 3 1`;

console.log(solve(str));
