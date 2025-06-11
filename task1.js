const calculateDiscountedPrice = (products, discount) => {
  return products.map((product) => product - product * (discount / 100));
};

calculateDiscountedPrice([100, 90, 80], 10);

const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => total + product, 0);
};

calculateTotalPrice([100, 90]);
