import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers!');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(number1 + number2);
        break;
      case 'subtract':
        setResult(number1 - number2);
        break;
      case 'multiply':
        setResult(number1 * number2);
        break;
      case 'divide':
        if (number2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold mb-4">React Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleCalculate('add')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          onClick={() => handleCalculate('subtract')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Subtract
        </button>
        <button
          onClick={() => handleCalculate('multiply')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Multiply
        </button>
        <button
          onClick={() => handleCalculate('divide')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Divide
        </button>
      </div>
      <div className="mt-4 p-4 border border-gray-400 rounded w-64">
        <h2 className="text-xl">Result: {result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
