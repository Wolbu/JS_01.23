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

//! Task 2

function createDebounceFunction(callback, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  };
}
