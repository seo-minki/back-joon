function solution(list) {
  const seqList = list.join(" ").split(" ");
  let waitStack = [];
  let cur = 1;

  for (let i = 0; i < seqList.length; i++) {
    const target = Number(seqList[i]);
    // 현재 번호 확인
    while (waitStack.length > 0 && waitStack[waitStack.length - 1] === cur) {
      waitStack.pop();
      cur++;
    }

    if (target === cur) {
      cur++;
    } else {
      waitStack.push(target);
    }
  }

  while (waitStack.length > 0 && waitStack[waitStack.length - 1] === cur) {
    waitStack.pop();
    cur++;
  }

  console.log(seqList.length === cur - 1 ? "Nice" : "Sad");
}

const list = [4, 1, 3, 2, 5];

solution(list);
