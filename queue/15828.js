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

function solution(n) {
  let queue = new Queue();

  const maxBuffuerSize = Number(n[0]);

  for (let i = 1; i < n.length - 1; i++) {
    let router = n[i];

    if (router > 0 && queue.size() < maxBuffuerSize) {
      queue.push(router);
    } else if (router === "0") {
      queue.pop();
    }
  }

  let answer = queue.item.length > 0 ? queue.item.join(" ") : "empty";

  console.log(answer);
}

const input = ["5", "1", "2", "0", "3", "4", "0", "5", "6", "0", "0", "-1"];

solution(input);
