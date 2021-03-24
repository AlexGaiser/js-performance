const { generateRandomArr } = require("./utils/generateUtils");
const { checkPerformance } = require("./utils/performance");

const longArr = generateRandomArr(10000000);

const shortArr = generateRandomArr(100);

// push operates in near constant time. We should see very little relation
// between length of the array and how long performance is.
checkPerformance("push long", () => longArr.push("1"));
checkPerformance("push short", () => shortArr.push("1"));

// The output should indicate that shift operates in 0(N) time
// shift short should take considerably less time than shift long
checkPerformance("shift long", () => longArr.shift());
checkPerformance("shift short", () => shortArr.shift());

checkPerformance("slice short", () => shortArr.slice(0, 10));
checkPerformance("slice long", () => longArr.slice(0, 10));
