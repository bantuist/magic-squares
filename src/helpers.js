export const triangularTotal = (cellCount, total) => {
  if (!cellCount) {
    return total;
  }

  return triangularTotal(--cellCount, total + cellCount);
};

export const isEven = number => number % 2 === 0;


