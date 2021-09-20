// Challenge Area

let getTip = function (total, tipPercent = 0.2) {
	let tipValue = tipPercent * total;
	let percent = tipPercent * 100
	return `A ${percent * 100}% tip on $${total} is $${tipValue}`;
};

let tip = getTip(100);
console.log(tip);
