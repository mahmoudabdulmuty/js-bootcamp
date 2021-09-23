const makeGuess = function (guess) {
	const min = 1;
	const max = 5;
	const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Generating Random Number
	// console.log(randomNum);
	return guess === randomNum;
};

console.log(makeGuess(1));
