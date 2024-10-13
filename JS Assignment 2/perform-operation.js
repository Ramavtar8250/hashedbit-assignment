function sumOfProducts(n1, n2) {
    // Convert numbers to strings to easily access digits
    let str1 = n1.toString();
    let str2 = n2.toString();

    // Reverse the strings to align the digits from the rightmost side
    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');

    let sum = 0;

    // Iterate over the digits, calculate product and sum them up
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        // Get digits or use 0 if one number has fewer digits
        let digit1 = i < str1.length ? parseInt(str1[i]) : 0;
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        
        sum += digit1 * digit2;
    }

    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34));   // Output: 24
console.log(sumOfProducts(123, 45)); // Output: 23 -> (3*5) + (2*4) + (1*0)
console.log(sumOfProducts(0, 567));  // Output: 0
