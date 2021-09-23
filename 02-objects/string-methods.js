const isValidPassword = function (password) {
	return (
		password.trim().length >= 8 && !password.toLowerCase().includes('password')
	);
};

console.log(isValidPassword('password123456789'));
console.log(isValidPassword('12345678dsapfkdsa       '));
console.log(isValidPassword('123457'));
console.log(isValidPassword('                          '));
