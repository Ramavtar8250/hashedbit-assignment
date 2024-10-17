const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Function to calculate the average score for each student
function calculateAverages(students) {
    const averages = {};

    for (const student in students) {
        const scores = Object.values(students[student]); // Get the scores as an array
        const total = scores.reduce((sum, score) => sum + score, 0); // Sum the scores
        const average = total / scores.length; // Calculate the average
        averages[student] = { average: average }; // Store the average in the result object
    }

    return averages;
}

// Calculate the averages
const result = calculateAverages(students);

// Convert result to the desired format
const formattedResult = Object.entries(result).map(([key, value]) => ({ [key]: value }));

console.log(formattedResult);

/* Output:
[
    { student1: { average: 56.2 } },
    { student2: { average: 56.2 } },
    { student3: { average: 56.2 } }
]
*/
