function solution(num) {
  const member = Array.from({ length: num }, (_, i) => i + 1);

  let step = 1;
  let index = 0;

  while (member.length > 1) {
    const moveStep = step ** 3;

    index = (index + moveStep - 1) % member.length;

    member.splice(index, 1);

    step++;
  }

  console.log(member[0]);
}

solution(3);
