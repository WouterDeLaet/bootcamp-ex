export default function snail(snailArray) {
  const endResult = [];

  while (snailArray.length !== 0) {
    snailArray[0].forEach(element => {
      endResult.push(element);
    });
    snailArray.splice(0, 1);
    for (let i = 0; i < snailArray.length; i++) {
      endResult.push(snailArray[i][snailArray[i].length - 1]);
      snailArray[i].pop();
    }

    if (snailArray.length !== 0) {
      snailArray[snailArray.length - 1].reverse();
      snailArray[snailArray.length - 1].forEach(element => {
        endResult.push(element);
      });
      snailArray.pop();

      for (let i = 1; i < snailArray.length + 1; i++) {
        endResult.push(snailArray[snailArray.length - i][0]);
        snailArray[snailArray.length - i].splice(0, 1);
      }
    }
  }
  return endResult;
}
