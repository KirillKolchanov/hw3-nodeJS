const calculateFactorial = (number) => {
  if (number <= 1) return 1;
  return number * calculateFactorial(number - 1);
};

calculateFactorial(5);

const power = (base, exponent) => {
  if (exponent < 1) return 1;
  return base * power(base, exponent - 1);
};

power(2, 3);
