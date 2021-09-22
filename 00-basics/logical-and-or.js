let temp = 55;

// Logical And Operator -- True if both sides are true.       False Otherwise
// Logical Or Operator -- True if at least one side are true. False Otherwise

if (temp >= 60 && temp <= 90) {
	console.log('It is not pretty nice out');
} else if (temp <= 0 || temp >= 120) {
	console.log('Do not go outside');
} else {
	console.log('Eh. Do what you want');
}

// Challenge Area

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan? only offer vegan dishes
if (isGuestOneVegan && isGuestTwoVegan) {
	console.log('only offer vegan dishes');
} // At least one vegan? make sure to offer up some vegan options
else if (isGuestOneVegan || isGuestTwoVegan) {
	console.log('make sure to offer up some vegan options');
} // Else, Offer up anything on the menu
else {
	console.log('Offer up anything on the menu.');
}
