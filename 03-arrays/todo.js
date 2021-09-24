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
console.log(todos);
