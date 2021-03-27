const {
  generateRandomArr,
  generateRandomObject,
  randomStringFromArr,
  randomStringFromConcat,
  getRandomChar,
} = require("../utils/generateUtils");

describe("Test Generate Utilities", () => {
  test("test generateRandomArr", () => {
    const arr = generateRandomArr(100);
    expect(arr.length).toBe(100);
  });
  test("test generateRandomArr", () => {
    const obj = generateRandomObject(100);
    expect(Object.keys(obj).length).toBe(100);
  });

  test("randomStringFromArr", () => {
    const str = randomStringFromArr(10);
    console.log(str);
    expect(str.length).toBe(10);
  });
  test("randomStringFromConcat", () => {
    const str = randomStringFromConcat(10);
    console.log(str);
    expect(str.length).toBe(10);
  });
  test("getRandomChar", () => {
    const str = getRandomChar(10);
    console.log(str);
    expect(str.length).toBe(1);
  });
});
