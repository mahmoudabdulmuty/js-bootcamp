const todos = [
	'Sleep at least 8 Hours',
	'Eat Well',
	'Finish The Course',
	'Complete JS-hero Challenge',
	'Read at least 1 Chapeter'
];

todos.splice(2, 1); //Deleting the 3rd item
todos.push('Buy Coffee'); //Adding an item to the end
todos.shift(); //Removing an item from the 1st

// printing all todos with forEach
todos.forEach(function (todo, i) {
	console.log(`${i + 1}. ${todo}`);
});
console.log(`separating forEach & for`);
// printing all todos with for loop
for (let i = 0; i <= todos.length - 1; i++) {
	console.log(`${i + 1}. ${todos[i]}`);
}
