import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const { form, bookingId } = state;
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Adjust the route as needed for your home page
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-zinc-900 min-h-screen">
      <div className="bg-slate-900 shadow-md rounded-lg p-8 w-full max-w-md mb-24">
        <h1 className="text-3xl font-bold text-center text-green-600">
          Booking Confirmed
        </h1>
        <p className="mt-6 text-lg text-center">
          Your booking has been successfully confirmed!
        </p>
        <p className="mt-4">
          <span className="font-semibold">Booking ID:</span>{" "}
          <strong>{bookingId}</strong>
        </p>
        <p className="mt-2">
          <span className="font-semibold">Name:</span> {form.name}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Email:</span> {form.email}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Mobile:</span> {form.mobile}
        </p>
        <p className="mt-6 text-center text-gray-700">
          Thank you for booking with us! We hope you enjoy your movie
          experience.
        </p>
        <button
          onClick={handleBackToHome}
          className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
