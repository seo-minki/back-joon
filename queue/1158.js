class Queue {
  constructor() {
    this.item = [];
  }

  push(item) {
    this.item.push(item);
  }

  pop() {
    if (this.empty()) {
      return -1;
    }
    return this.item.shift();
  }

  front() {
    if (this.empty()) {
      return -1;
    }

    return this.item[0];
  }

  back() {
    if (this.empty()) {
      return -1;
    }

    return this.item[this.size() - 1];
  }

  size() {
    return this.item.length;
  }

  empty() {
    return this.item.length === 0 ? 1 : 0;
  }
}

function solution(n, k) {
  let answer = [];

  let queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  let count = 1;

  while (queue.item.length) {
    const popItem = queue.pop();

    if (count % k === 0) {
      answer.push(popItem);
    } else {
      queue.push(popItem);
    }

    count++;
  }

  console.log(`<${answer.join(", ")}>`);
}

const [n, k] = [7, 3];

solution(n, k);
