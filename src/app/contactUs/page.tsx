"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "aliza",
    email: "alizafaizan6@gmail.com",
    message: "hello",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus("Sending...");
      await emailjs.send(
        "service_qjcsori", // Replace with your EmailJS Service ID
        "template_4n2r4n9", // Replace with your EmailJS Template ID
        formData,
        "0-ApsHP5Q0-TT8vQC" // Replace with your EmailJS User ID
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Have any questions or feedback? We’d love to hear from you!
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Send Message
            </button>
          </div>
          {/* Status Message */}
          {status && (
            <div
              className={`mt-4 text-center ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
function then(arg0: () => void) {
    throw new Error("Function not implemented.");
}

