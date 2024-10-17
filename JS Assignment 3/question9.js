function countWords(paragraph) {
    // Trim whitespace and split the paragraph by spaces
    let words = paragraph.split(' ');
    
    // Return the length of the array which gives the word count
    return words.length;
  }
  
  // Example usage
  let paragraph = "JavaScript is a versatile programming language. It's used for both frontend and backend development!";
  let wordCount = countWords(paragraph);
  
  console.log(wordCount);  // Output: 14
  