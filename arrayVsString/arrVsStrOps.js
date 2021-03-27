const { readEveryIndex } = require("../utils/arrayUtils");
const {
  randomStringFromConcat,
  genRandomArrChar,
} = require("../utils/generateUtils");
const { checkPerformance } = require("../utils/performance");

const arr = genRandomArrChar(10000000);
const str = randomStringFromConcat(10000000);
checkPerformance("read index from arr", () => arr[1234]);
checkPerformance("read index from str", () => str[1234]);

checkPerformance("read every index from arr", () => readEveryIndex(arr));
checkPerformance("read every index from str", () => readEveryIndex(str));
