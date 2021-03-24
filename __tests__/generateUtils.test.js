const {
  generateRandomArr,
  generateRandomObject,
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
});
