import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookSeat = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(100000 + Math.random() * 900000); // Random booking ID
    navigate('/booking-confirmation', { state: { form, bookingId } });
  };

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center">Book Your Seat</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div>
          <label className="block mb-2 text-sm font-semibold">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-gray-600 bg-gray-700 text-white p-2 w-full rounded focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border border-gray-600 bg-gray-700 text-white p-2 w-full rounded focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold">Mobile</label>
          <input
            type="text"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="border border-gray-600 bg-gray-700 text-white p-2 w-full rounded focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookSeat;
