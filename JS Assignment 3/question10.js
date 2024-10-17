function reverseString(str) {
    // Convert the string to an array of characters, reverse it, and join back to a string
    return str.split('').reverse().join('');
  }
  
  // Example usage
  let input = "Hello";
  let output = reverseString(input);
  
  console.log(output);  // Output: olleH
  