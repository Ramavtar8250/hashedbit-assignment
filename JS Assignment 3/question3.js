let string = 'INDIA';

let charArray = string.split('');

charArray.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');

let modifiedString = charArray.join('');

console.log(modifiedString);  // Output: 'INDONESIA'
