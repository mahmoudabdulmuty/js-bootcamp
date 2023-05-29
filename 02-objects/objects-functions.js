const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

const otherBook = {
  title: 'Atomic Habits',
  author: 'James Clear',
  pageCount: 306,
};

// function that passes an object

const getSummary = (book) => ({
  summary: `${book.title} by ${book.author}`,
  pageCountSummary: `${book.title} is ${book.pageCount} pages`,
});
const myBookSummary = getSummary(myBook);
const OtherBookSummary = getSummary(otherBook);
// returning only summary property from returning Object {}
// console.log(myBookSummary.summary);

// Challenge Area

const getTemp = (fahrenheit) => ({
  fahrenheit,
  celsius: (fahrenheit - 32) * (5 / 9),
  kelvin: (fahrenheit + 459.67) * (5 / 9),
});

// Get temp Object including all three value
const getTempValue = getTemp(32);
// console.log(getTempValue);

// Get temp Object including only celsius value
const getTempCelsius = getTemp(32).celsius;
// console.log(getTempCelsius);

// Get temp Object including only kelvin value
const getTempKelvin = getTemp(32).kelvin;
// console.log(getTempKelvin);
