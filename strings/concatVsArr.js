const {
  randomStringFromArr,
  randomStringFromConcat,
  genRandomArrChar,
} = require("../utils/generateUtils");
const { checkPerformance } = require("../utils/performance");
checkPerformance("from arr", () => randomStringFromArr(100000));
checkPerformance("from concat", () => randomStringFromConcat(100000));

// findings:
// for a number of operations under ~100000 concat is faster
// more than ~100000 arr is faster
