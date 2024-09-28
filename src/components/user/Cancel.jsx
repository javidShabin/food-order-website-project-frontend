import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-red-500 mx-auto mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Payment Cancelled!
        </h2>
        <p className="text-gray-600 mb-6">
          Your payment was not completed. If this was a mistake, you can try
          again.
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentCancelled;
