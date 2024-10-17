function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
  }
  
  // Example usage
  let sentence = "I love javacript programming!";
  let correctedSentence = correctfn(sentence, "javacript", "javascript");
  
  console.log(correctedSentence);  // Output: "I love javascript programming!"
  