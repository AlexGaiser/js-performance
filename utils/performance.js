const checkPerformance = (string, testFunc) => {
  console.time(string);
  testFunc();
  return console.timeEnd(string);
};

module.exports = {
  checkPerformance,
};
