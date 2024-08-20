class PasswordStack {
  constructor() {
    this.item = [];
    this.subItem = [];
  }

  push(item) {
    this.item.push(item);
  }

  pop() {
    this.item.pop();
  }

  moveCursor(str) {
    if (str === "<") {
      this.item.length === 0 || this.subItem.push(this.item.pop());
    } else if (str === ">") {
      this.subItem.length === 0 || this.item.push(this.subItem.pop());
    }
  }
}

function solution(input) {
  let answer = [];
  const regex = /^[a-zA-Z0-9]*$/;

  for (let i = 1; i < input.length; i++) {
    const stack = new PasswordStack();

    for (let k = 0; k < input[i].length; k++) {
      const str = input[i][k];

      if (regex.test(str)) {
        stack.push(str);
      } else if (str === "<" || str === ">") {
        stack.moveCursor(str);
      } else {
        stack.pop();
      }
    }

    answer.push(stack.item.join("") + stack.subItem.reverse().join(""));
  }

  console.log(answer.join("\n"));
}

const input = ["2", "<<BP<A>>Cd-", "ThIsIsS3Cr3t"];

solution(input);
