function findTax(salary) {
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0; // 0% tax
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10; // 10% tax
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20; // 20% tax
            break;
        case (salary > 1500000):
            tax = salary * 0.30; // 30% tax
            break;
        default:
            tax = "Invalid salary input";
    }

    return tax;
}

// Example usage:
console.log(findTax(400000));  // Output: 0
console.log(findTax(750000));  // Output: 75000
console.log(findTax(1200000)); // Output: 240000
console.log(findTax(2000000)); // Output: 600000
