function repeatedDigitSum(num) {
    // Repeat until the number is a single digit
    while (num >= 10) {
      // Convert the number to a string, split into individual digits, sum the digits
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  }
  
  // Example usage
  let result = repeatedDigitSum(456);
  console.log(result);  // Output: 6
  