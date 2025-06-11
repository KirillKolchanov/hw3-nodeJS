const createCounter = () => {
  let count = 0;
  return () => count++;
};

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // 0
counter2(); // 0
counter1(); // 1
counter2(); // 1

const repeatFunction = (func, times) => {
  return function (...args) {
    if (times < 0) {
      while (true) {
        func(...args);
      }
    }

    for (let i = 0; i < times; i++) {
      func(...args);
    }
  };
};

const sayHello = () => console.log("Hello!");

const repeatHello = repeatFunction(sayHello, 3);
const infiniteHello = repeatFunction(sayHello, -1);
