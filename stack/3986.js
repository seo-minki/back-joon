function handleGoodWord(word) {
  let stack = [];

  if (word.length % 2 !== 0) {
    return 0;
  }

  for (let str of word) {
    if (stack.length > 0) {
      const last = stack[stack.length - 1];

      if (last === str) {
        stack.pop();
      } else {
        stack.push(str);
      }
    } else {
      stack.push(str);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

function solution(input) {
  let answer = 0;

  for (let i = 1; i < input.length; i++) {
    const word = input[i];

    answer += handleGoodWord(word);
  }

  console.log(answer);
}

const input = ["3", "ABAB", "AABB", "ABBA"];

solution(input);
