function calculator(operator, testA, testB) {
  let a = Number(testA);
  let b = Number(testB);
  if (operator === "+") {
    return b + a;
  } else if (operator === "-") {
    return b - a;
  } else if (operator === "*") {
    return b * a;
  } else if (operator === "/") {
    return b / a;
  }
}

function solution(str, numberList) {
  let answer = 0;
  let stack = [];
  const regex = /^[A-Z]$/;
  const list = [...numberList];

  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      // 알파벳의 아스키 코드는 고정 A = 65, B = 66, C = 67
      stack.push(list[str[i].charCodeAt(0) - 65]);
    } else {
      const a = stack.pop();
      const b = stack.pop();

      const result = calculator(str[i], a, b);
      stack.push(result);
    }
  }

  answer = Number(stack.join("")).toFixed(2);
  console.log(answer);
}

const str = "ABC*+DE/-";
const value = [1, 2, 3, 4, 5];

solution(str, value);

// 6.20
