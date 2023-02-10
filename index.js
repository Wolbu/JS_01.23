//! Task 1

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}

//! Task 2

class Calculator {
  constructor(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Both arguments must be numbers");
    }
    this._x = x;
    this._y = y;
  }

  setX(x) {
    if (typeof x !== "number") {
      throw new Error("X must be a number");
    }
    this._x = x;
  }

  setY(y) {
    if (typeof y !== "number") {
      throw new Error("Y must be a number");
    }
    this._y = y;
  }

  getSum() {
    return this._x + this._y;
  }

  getMul() {
    return this._x * this._y;
  }

  getSub() {
    return this._x - this._y;
  }

  getDiv() {
    if (this._y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return this._x / this._y;
  }
}

//! Task 3

class RickAndMorty {
  constructor() {
    this.API_URL = "https://rickandmortyapi.com/api/";
  }

  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  }

  getCharacter(id) {
    return new Promise((resolve, reject) => {
      if (typeof id !== "number") {
        reject(new Error());
      }
      this.get(`${this.API_URL}character/${id}`)
        .then((character) => {
          if (!character) {
            resolve(null);
          }
          resolve(character);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getEpisode(id) {
    if (typeof id !== "number") {
      throw new Error();
    }
    const episode = await this.get(`${this.API_URL}episode/${id}`);
    if (!episode) {
      return null;
    }
    return episode;
  }
}
