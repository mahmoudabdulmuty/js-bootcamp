const isAccountLocked = false;
const userRole = 'Admin';

if (isAccountLocked) {
	console.log('Account is locked');
} else if (userRole === 'Admin') {
	console.log('Welcome Admin');
} else {
	console.log('Welcome !!');
}

// Challenge area

const temp = 4;

if (temp <= 10) {
	console.log("It's freezing outside!");
} else if (temp >= 35) {
	console.log("It's hot outside!");
} else {
	console.log("Go for it. It's preety nice.");
}
