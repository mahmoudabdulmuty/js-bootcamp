const myAccount = {
	name: 'Mahmoud',
	expenses: 0,
	income: 0
};

const addIncome = function (account, amount) {
	account.income += amount;
};
const addExpense = function (account, amount) {
	account.expenses += amount;
};

const resetAccount = function (account) {
	account.expenses = 0;
	account.income = 0;
};

const getSummary = function (account) {
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
summary = getSummary(myAccount);
console.log(summary);
