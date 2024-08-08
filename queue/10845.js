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

function solution(commandList) {
  let answer = [];

  const queue = new Queue();

  for (let i = 1; i < commandList.length; i++) {
    let [command, value] = commandList[i].split(" ");

    if (command === "push") {
      queue.push(value);
    } else {
      let result = queue[command]();
      answer.push(result);
    }
  }

  console.log(answer.join(" "));
}

const input = [
  "15",
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];

solution(input);
