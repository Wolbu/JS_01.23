//! Task 1
class Stack {
  constructor(limit = 10) {
    if (limit <= 0) {
      throw new Error("Invalid limit value");
    }
    this.limit = limit;
    this.elements = [];
  }

  push(elem) {
    if (this.elements.length === this.limit) {
      throw new Error("Limit exceeded");
    }
    this.elements.push(elem);
  }

  pop() {
    if (this.elements.length === 0) {
      throw new Error("Empty stack");
    }
    return this.elements.pop();
  }

  peek() {
    return this.elements.length === 0
      ? null
      : this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  toArray() {
    return [...this.elements];
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error("Not iterable");
    }
    const stack = new Stack(iterable.length);
    for (const elem of iterable) {
      stack.push(elem);
    }
    return stack;
  }
}

//! Task 2

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(elem) {
    const node = { value: elem, next: null };
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(elem) {
    const node = { value: elem, next: this.head };
    this.head = node;
    if (this.size === 0) {
      this.tail = node;
    }
    this.size++;
  }

  find(elem) {
    let current = this.head;
    while (current) {
      if (current.value === elem) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error("Passed entity is not iterable");
    }
    const list = new LinkedList();
    for (const elem of iterable) {
      list.append(elem);
    }
    return list;
  }
}

//! Task 3

class Car {
  #brand = "";
  #model = "";
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  // Getters
  get brand() {
    return this.#brand;
  }
  get model() {
    return this.#model;
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  get fuelConsumption() {
    return this.#fuelConsumption;
  }
  get damage() {
    return this.#damage;
  }
  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }
  get isStarted() {
    return this.#isStarted;
  }
  get mileage() {
    return this.#mileage;
  }
  get health() {
    return this.#health;
  }

  // Setters
  set brand(newBrand) {
    if (
      typeof newBrand === "string" &&
      newBrand.length > 0 &&
      newBrand.length <= 50
    ) {
      this.#brand = newBrand;
    } else {
      throw new Error("Invalid brand name");
    }
  }
  set model(newModel) {
    if (
      typeof newModel === "string" &&
      newModel.length > 0 &&
      newModel.length <= 50
    ) {
      this.#model = newModel;
    } else {
      throw new Error("Invalid model name");
    }
  }
  set yearOfManufacturing(newYear) {
    const currentYear = new Date().getFullYear();
    if (
      typeof newYear === "number" &&
      newYear >= 1950 &&
      newYear <= currentYear
    ) {
      this.#yearOfManufacturing = newYear;
    } else {
      throw new Error("Invalid year of manufacturing");
    }
  }
  set maxSpeed(newMaxSpeed) {
    if (
      typeof newMaxSpeed === "number" &&
      newMaxSpeed >= 100 &&
      newMaxSpeed <= 330
    ) {
      this.#maxSpeed = newMaxSpeed;
    } else {
      throw new Error("Invalid max speed");
    }
  }
  set maxFuelVolume(newMaxFuelVolume) {
    if (
      typeof newMaxFuelVolume === "number" &&
      newMaxFuelVolume >= 20 &&
      newMaxFuelVolume <= 100
    ) {
      this.#maxFuelVolume = newMaxFuelVolume;
    } else {
      throw new Error("Invalid max fuel volume");
    }
  }
  set fuelConsumption(newFuelConsumption) {
    if (typeof newFuelConsumption === "number" && newFuelConsumption > 0) {
      this.#fuelConsumption = newFuelConsumption;
    } else {
      throw new Error("Invalid fuel consumption");
    }
  }
  set damage(newDamage) {
    if (typeof newDamage === "number" && newDamage >= 1 && newDamage <= 5) {
      this.#damage = newDamage;
    } else {
      throw new Error("Invalid damage");
    }
  }

  // Methods
  start() {
    if (this.#isStarted) {
      throw new Error("Car has already started");
    } else {
      this.#isStarted = true;
    }
  }
}
