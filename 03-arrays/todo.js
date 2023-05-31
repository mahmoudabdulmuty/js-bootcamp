const todos = [
  'Order Cat food',
  'Clean kitchen',
  'Buy Food',
  'Do Work',
  'Exercise',
];

todos.splice(2, 1);
todos.push('Buy Coffee');
todos.shift('');

todos.forEach((todo, idx) => {
  console.log(`${idx + 1}. ${todo}`);
});
