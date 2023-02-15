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
