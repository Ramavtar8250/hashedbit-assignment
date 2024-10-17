let string = "JavaScript is awesome and fun!";  // Example string with more than 20 characters

// Initialize counters for vowels and consonants
let vowelsCount = 0;
let consonantsCount = 0;

// Convert the string to lowercase to handle both uppercase and lowercase letters
let lowerCaseString = string.toLowerCase();

// Define sets of vowels and consonants
let vowels = 'aeiou';
let consonants = 'bcdfghjklmnpqrstvwxyz';

// Loop through each character in the string
for (let char of lowerCaseString) {
  if (vowels.includes(char)) {
    vowelsCount++;
  } else if (consonants.includes(char)) {
    consonantsCount++;
  }
}

// Output the result
console.log(`Number of vowels: ${vowelsCount}`);
console.log(`Number of consonants: ${consonantsCount}`);
