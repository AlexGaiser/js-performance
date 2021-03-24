const checkPerformance = (string, testFunc) => {
  console.time(string);
  testFunc();
  console.timeEnd(string);
};

module.exports = {
  checkPerformance,
};
