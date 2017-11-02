export const triangular = (cellCount, total) => {
  if (!cellCount) {
    return total;
  }

  return triangular(--cellCount, total + cellCount);
};

export const isEven = number => number % 2 === 0;


