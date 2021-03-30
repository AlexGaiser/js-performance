const { generateRandomArr } = require("../utils/generateUtils");
const { checkPerformance } = require("../utils/performance");
const arr1 = generateRandomArr(10000);
const arr2 = generateRandomArr(10000);

const baseRec = (n) => {
  if (n === 0) {
    return 0;
  }

  const element = arr1[0];
  baseRec(n - 1);
};

const baseIter = (n) => {
  for (let i = 0; i < n.length; i++) {
    const element = arr2[i];
  }
  return 0;
};

checkPerformance("Iteration", () => baseIter(arr1.length));
checkPerformance("Recursion", () => baseRec(arr2.length));

/*
findings:
recursion is siginificantly slower for even basic loops
recursion can throw a call stack size exceeded error on very large iterations

Iteration: 0.135ms
Recursion: 0.955ms
*/
