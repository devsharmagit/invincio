import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
    <div className="herosection min-h-[90vh] flex-1 max-w-7xl mx-auto flex  items-center">
      <div className="max-w-2xl text-left">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to the <span className="text-blue-500">AI-Powered</span>{" "}
          Chatbot
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Experience the future of customer support with our intelligent chatbot
          solution.
          <br />
          <span className="text-blue-500">
            
            24/7 assistance, instant responses, and personalized interactions.
          </span>
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Book an Appointment
        </button>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
