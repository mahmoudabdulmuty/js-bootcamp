const myAccount = {
  name: 'Mahmoud',
  expenses: 0,
  income: 0,
};

const addIncome = (account, amount) => {
  account.income += amount;
};
const addExpense = (account, amount) => {
  account.expenses += amount;
};

const resetAccount = (account) => {
  account.expenses = 0;
  account.income = 0;
};

const getSummary = (account) => {
  const name = account.name;
  const income = account.income;
  const expenses = account.expenses;
  const balance = account.income - account.expenses;
  return `Account for ${name} has ${balance}. $${income} in income. $${expenses} in expenses`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 50);
addExpense(myAccount, 250);

let summary = getSummary(myAccount);
console.log(summary);

resetAccount(myAccount);
summary = getSummary(myAccount); //calling fun. again to change returning value from getSummary
console.log(summary);
