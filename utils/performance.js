const checkPerformance = (string, testFunc) => {
  console.time(string);
  const res = testFunc();
  console.timeEnd(string);
  return res;
};

module.exports = {
  checkPerformance,
};
