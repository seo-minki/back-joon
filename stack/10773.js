let stack = [];
let answer = 0;

function solution(input) {
  for (let i = 1; i < input.length; i++) {
    const int = Number(input[i]);

    if (int === 0) {
      stack.pop();
    } else {
      stack.push(int);
    }
  }

  if (stack.length > 0) {
    answer = stack.reduce((arr, cur) => arr + cur, 0);
  }

  console.log(answer);
}

const input = [4, 3, 0, 4, 0];
const input2 = [10, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6];
solution(input);
