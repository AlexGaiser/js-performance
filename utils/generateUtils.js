const uuid = require("uuid").v4;

const genRandomArrBase = (func) => (length = 1000) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const value = func();
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

const getRandomChar = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

const randomStringFromArr = (length = 1000) => {
  const stringArr = [];
  for (let i = 0; i < length; i++) {
    const char = getRandomChar();
    stringArr.push(char);
  }
  return stringArr.join("");
};
const randomStringFromConcat = (length = 1000) => {
  let str = "";
  for (let i = 0; i < length; i++) {
    const char = getRandomChar();
    str += char;
  }
  return str;
};

const genRandomStr = (length) => {
  if (length > 100000) {
    return randomStringFromArr(length);
  } else {
    return randomStringFromConcat(length);
  }
};

const generateRandomArr = genRandomArrBase(uuid);
const genRandomArrChar = genRandomArrBase(getRandomChar);

module.exports = {
  generateRandomArr,
  generateRandomObject,
  randomStringFromArr,
  randomStringFromConcat,
  genRandomArrChar,
  getRandomChar,
  genRandomArrBase,
};
