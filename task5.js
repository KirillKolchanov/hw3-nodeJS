const lazyMap = (arr, func) => {
  let currentIndex = 0;

  return function () {
    if (currentIndex < arr.length) {
      const result = func(arr[currentIndex]);
      currentIndex++;
      return result;
    }
    return undefined;
  };
};

const numbers = [1, 2, 3];
const getNextDoubled = lazyMap(numbers, (elem) => elem * 2);

getNextDoubled(); // 2
getNextDoubled(); // 4
getNextDoubled(); // 6
getNextDoubled(); // undefined
