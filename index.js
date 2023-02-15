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
