import React, { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Coaching Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d4b41]">
              Transform Your Life with Expert Coaching
            </h1>
            <p className="text-lg text-gray-600">
              Join our coaching program and unlock your full potential. Our experienced coaches will guide you through a personalized journey of growth and success.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-[#718979] mr-2">✓</span>
                Personalized coaching sessions
              </li>
              <li className="flex items-center">
                <span className="text-[#718979] mr-2">✓</span>
                Expert guidance and support
              </li>
              <li className="flex items-center">
                <span className="text-[#718979] mr-2">✓</span>
                Proven success strategies
              </li>
            </ul>
            <button className="bg-[#2d4b41] text-white py-3 px-6 rounded-lg hover:bg-[#718979] transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#eaeeed] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#2d4b41] mb-6">Get Started Today</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2d4b41] focus:ring-[#2d4b41]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2d4b41] focus:ring-[#2d4b41]"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2d4b41] focus:ring-[#2d4b41]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2d4b41] focus:ring-[#2d4b41]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2d4b41] text-white py-3 px-4 rounded-md hover:bg-[#718979] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
