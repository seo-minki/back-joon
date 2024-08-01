const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let stack = [];
let answer = "";

function solution(input) {
  for (let i = 1; i < input.length; i++) {
    let command = input[i];
    if (command.includes("push")) {
      stack.push(command.split(" ")[1]);
    }

    if (command === "top") {
      let top = stack[stack.length - 1] ? stack[stack.length - 1] : -1;
      answer += `${top}\n`;
    }

    if (command === "size") {
      answer += `${stack.length}\n`;
    }

    if (command === "empty") {
      answer += `${stack.length > 0 ? 0 : 1}\n`;
    }

    if (command === "pop") {
      let popNumber = stack.pop();
      answer += `${popNumber ? popNumber : -1}\n`;
    }
  }

  console.log(answer);
}

solution(input);
