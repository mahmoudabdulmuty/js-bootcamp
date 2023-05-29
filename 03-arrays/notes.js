const notes = [
  { title: 'Note#1', body: 'Haha' },
  { title: 'Note#2', body: 'Laha' },
  { title: 'Note#3', body: 'Zaha' },
];

// finding note
const findNote = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.trim().toLowerCase();
  });
};
console.log(findNote(notes, ' note#2'));
// finding note index
const note = (notes, noteTitle) => {
  const noteIndex = notes.findIndex((note) => {
    return note.title.toLowerCase() === noteTitle.trim().toLowerCase();
  });
  return notes[noteIndex];
};
console.log(note(notes, ' note#2'));
