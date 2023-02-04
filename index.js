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
