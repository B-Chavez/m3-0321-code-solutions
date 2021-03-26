const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

console.log(numbers.map(x => x*2));

console.log(numbers.map(x => `$${x}.00`))

console.log(languages.map(x => x.toUpperCase()));

console.log(languages.map(x => x[0]));