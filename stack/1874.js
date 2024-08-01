function solution(count, towers) {
  let stack = [];
  let answer = new Array(count).fill(0);

  for (let i = 0; i < count; i++) {
    let currentTower = towers[i];

    while (stack.length > 0 && stack[stack.length - 1][0] < currentTower) {
      stack.pop();
    }

    if (stack.length > 0) {
      answer[i] = stack[stack.length - 1][1];
    }

    stack.push([currentTower, i + 1]);
  }

  console.log(answer.join(" "));
}

const n = 5;
const strings = [6, 9, 5, 7, 4];

solution(n, strings);
