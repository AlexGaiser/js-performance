/* Findings 
 Array split with join on an operation is slower than running a simple operation on a long string
 always spliting a string into an array before performing operations is not always 
 the best course of action
 this continues to be a complex question
*/

const { readEveryIndex } = require("../utils/arrayUtils");
const {
  randomStringFromConcat,
  genRandomArrChar,
} = require("../utils/generateUtils");
const { checkPerformance } = require("../utils/performance");

const arr = genRandomArrChar(10000000);
const str = randomStringFromConcat(10000000);
let str2 = randomStringFromConcat(10000000);

checkPerformance("read index from arr", () => arr[1234]);
checkPerformance("read index from str", () => str[1234]);

checkPerformance("read every index from arr", () => readEveryIndex(arr));
checkPerformance("read every index from str", () => readEveryIndex(str));

checkPerformance("split then read as array then join", () => {
  let arr = str.split("");
  readEveryIndex(arr);
  arr.join("");
});
checkPerformance("read every index from str", () => {
  readEveryIndex(str2);
  // const middleSubstring = str2.substring(
  //   str2.length / 2,
  //   str2.length / 2 + 1000
  // );
});
