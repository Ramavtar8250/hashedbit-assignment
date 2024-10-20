import React, { useState } from 'react';

const TodoListApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Function to add a new task
  const addTask = () => {
    if (task.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    // Add task to the list and reset the input field
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, task];
      // Sort tasks in ascending order
      return updatedTodos.sort();
    });
    setTask(''); // Clear input after adding task
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold mb-4">Todo List App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="p-2 border border-gray-300 rounded mr-2 w-64"
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add Task
        </button>
      </div>

      {todos.length > 0 ? (
        <ul className="list-none w-64">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTask(index)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks yet. Start adding tasks!</p>
      )}
    </div>
  );
};

export default TodoListApp;
