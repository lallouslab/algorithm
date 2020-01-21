// https://www.scriptonitejs.com/dynamic-programming/#knapsack

const knapsack = (ws, vs, i, c) => {
  let maxval = 0;
  if (i === 0 || c === 0) return 0;
  if (c >= ws[i]) maxval = vs[i] + knapsack(ws, vs, i - 1, c - ws[i]);
  maxval = Math.max(maxval, knapsack(ws, vs, i - 1, c));
  return maxval;
};

let dpArr = [];
for (let i = 0; i <= totalNumberOfItems; i++) {
  dpArr.push(Array(numberOfItemsToConsider + 1).fill(undefined));
}

/**
 * dynamic knapsack
 * @param {array} ws - weights
 * @param {array} vs - values
 * @param {number} i - index
 * @param {number} c - capacity left
 * @returns {number} maximum value at [i][c]
 */

const knapsackDP = (ws, vs, i, c) => {
  let maxval = 0;
  if (dpArr[i][c] !== undefined) return dpArr[i][c];
  if (i === 0 || c === 0) return 0;
  if (c >= ws[i]) maxval = vs[i] + knapsack(ws, vs, i - 1, c - ws[i]);
  maxval = Math.max(maxval, knapsack(ws, vs, i - 1, c));
  dpArr[i][c] = maxval;
  return maxval;
};

const itemWeights = [null, 1, 3, 2, 5, 4],
  itemValues = [null, 2, 4, 6, 8, 5],
  numberOfItemsToConsider = 10,
  totalNumberOfItems = 5;

console.log(
  knapsack(itemWeights, itemValues, totalNumberOfItems, numberOfItemsToConsider)
);

console.log(
  knapsackDP(
    itemWeights,
    itemValues,
    totalNumberOfItems,
    numberOfItemsToConsider
  )
);
