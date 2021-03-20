const { generateRandomArr } = require("../utils/generateUtils");
const { checkPerformance } = require("../utils/performance");

const arr = generateRandomArr(100000);

checkPerformance("cloning arr", () => {
  const newArr = [...arr];
  return newArr;
});
