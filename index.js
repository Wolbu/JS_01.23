//! Task 1

Array.prototype.customFilter = function (callback, thisArg) {
  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
