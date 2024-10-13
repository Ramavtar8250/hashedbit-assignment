function calculate(num1, num2, operator) {
    let result;
    
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }
    
    return result;
}

// Example usage:
console.log(calculate(10, 5, 'add'));       // Output: 15
console.log(calculate(10, 5, 'subtract'));  // Output: 5
console.log(calculate(10, 5, 'multiply'));  // Output: 50
console.log(calculate(10, 5, 'divide'));    // Output: 2
