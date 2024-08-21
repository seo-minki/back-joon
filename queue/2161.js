function solution(input) {
  let arr = Array.from({ length: input }, (_, i) => i + 1);
  let answer = [];

  while (arr.length > 1) {
    answer.push(arr.shift());
    arr.push(arr.shift());
  }

  console.log(answer.concat(arr).join(" "));
}

const number = 7;
solution(number);
