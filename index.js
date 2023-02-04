//!TASK 1

function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error();
  }

  let copy;
  if (Array.isArray(obj)) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = makeDeepCopy(obj[i]);
    }
  } else {
    copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = makeDeepCopy(obj[key]);
      }
    }
  }

  return copy;
}

//!TASK 2

function selectFromInterval(array, a, b) {
  if (
    !Array.isArray(array) ||
    array.length === 0 ||
    array.some(isNaN) ||
    isNaN(a) ||
    isNaN(b)
  ) {
    throw new Error();
  }

  let intervalStart = Math.min(a, b);
  let intervalEnd = Math.max(a, b);

  return array.filter((val) => val >= intervalStart && val <= intervalEnd);
}
