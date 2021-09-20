// Challenge Area

let getTip = function (total, tipPercent = 0.2) {
	let tipValue = tipPercent * total;
	return `your tip is ${tipValue}`;
};

let tip = getTip(100, 0.25);
console.log(tip);
