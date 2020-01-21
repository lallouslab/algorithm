// https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  addSingleToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  addToHead(values) {
    values.forEach(value => this.addSingleToHead(value));
    return this;
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  find(value) {
    let thisNode = this.head;
    while(thisNode) {
      if (thisNode.value === value) {
        return thisNode;
        thisNode = thisNode.next;
      }
      return thisNode;
    }
  }

  remove(value) {
    if (this.length === 0) {
      return undefined;
    }

    if (this.head.value === value) {
      this.removeFromHead();
      return this;
    }

    let prevNode = this.head;
    let thisNode = this.head.next;

    while(thisNode) {
      if (thisNode.value === value) {
        break;
      }
      prevNode = thisNode;
      thisNode = thisNode.next;
    }
    if (thisNode === null) {
      return undefined;
    }
    prevNode.next = thisNode.next;
    this.length--;
    return this;
  }
}