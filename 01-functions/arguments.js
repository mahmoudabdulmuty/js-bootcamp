// Challenge Area

const getTip = (total, tipPercent = 0.2) => {
  const tipValue = tipPercent * total;
  const percent = tipPercent * 100;
  return `A ${percent * 100}% tip on $${total} is $${tipValue}`;
};

const tip = getTip(100);
console.log(tip);
