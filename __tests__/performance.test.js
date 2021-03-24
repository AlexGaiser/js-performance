const { checkPerformance } = require("../utils/performance");

describe("Test performance Utils", () => {
  test("checkPerformance", () => {
    const func = () => {
      let x = 10;
    };
    let check = checkPerformance("test", func);
    expect(check).toBe(undefined);
  });
});
