const todos = [
	{ text: 'Sleep at least 8 Hours', completed: true },
	{ text: 'Eat Well', completed: false },
	{ text: 'Finish The Course', completed: true },
	{ text: 'Complete JS-hero Challenge', completed: false },
	{ text: 'Read at least 1 Chapeter', completed: false }
];
const deleteTodo = function (todos, todoText) {
	const todoIndex = todos.findIndex(todo => {
		return todo.text.toLowerCase() === todoText.trim().toLowerCase();
	});
	todos.splice(todoIndex, 1);
};
deleteTodo(todos, 'sleep at least 8 hours');
console.log(todos);
