"use client";
import { AiOutlineMail } from "react-icons/ai";
import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", formData);
      console.log(response.data); // Handle the response as needed
      // Clear form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

  return (
    <section className="section-contact-us border-t border-gray-100" id="section-contact-us">
      <div className="section-features__head">
        <h2 className="h2 mb-4 text-black">Contact Us</h2>
        <AiOutlineMail />
      </div>
      <form onSubmit={handleSubmit} className="form-contact-us">
        <div className="form-contact-us__wrapper">
          <div className="flex">
            <div>
              <label
                htmlFor="firstName"
                className="block text-lg font-medium font-architects-daughter"
              >
                First Name{" "}
                <span className="text-xs text-red-400">
                  <sup>*required</sup>
                </span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="ml-20">
              <label
                htmlFor="lastName"
                className="block text-lg font-medium font-architects-daughter"
              >
                Last Name{" "}
                <span className="text-xs text-red-400">
                  <sup>*required</sup>
                </span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium font-architects-daughter"
              >
                Email Address{" "}
                <span className="text-xs text-red-400">
                  <sup>*required</sup>
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="ml-20">
              <label
                htmlFor="phone"
                className="block text-lg font-medium font-architects-daughter"
              >
                Phone Number{" "}
                <span className="text-xs text-red-400">
                  <sup>*required</sup>
                </span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="block text-lg font-medium font-architects-daughter"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
