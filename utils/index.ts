export const getChoppedNumbersArray = (array: Array<any>, separator = 4) => {
  if (!array?.length) return [];
  const hiddenNumbersArray = [];
  const length = array.length;
  for (let i = 0; i < length; i += separator) {
    const temp = [];
    for (let j = i; j < i + separator; j++) {
      if (j >= length) break;
      temp.push(array[j]);
    }
    hiddenNumbersArray.push(temp);
  }

  return hiddenNumbersArray;
};

export const sleep = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
