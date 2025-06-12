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

const fibonacciGenerator = () => {
  let prev = 0;
  let current = 1;

  return function () {
    const result = prev;
    const next = prev + current;
    prev = current;
    current = next;

    return result;
  };
};

const getNextFibonacci = fibonacciGenerator();

getNextFibonacci(); // 0
getNextFibonacci(); // 1
getNextFibonacci(); // 1
getNextFibonacci(); // 2
getNextFibonacci(); // 3
