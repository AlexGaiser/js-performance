const uuid = require("uuid").v4;

const generateRandomArr = (length = 1000) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const value = uuid();
    arr.push(value);
  }
  return arr;
};

const generateRandomObject = (length = 1000) => {
  const obj = {};
  for (let i = 0; i < length; i++) {
    const key = uuid();
    obj[key] = i;
  }
  return obj;
};

module.exports = {
  generateRandomArr,
  generateRandomObject,
};
