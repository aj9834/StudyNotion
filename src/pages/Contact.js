import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    emailjs.sendForm("service_8v8besf", "template_2090gfr", e.target, "jYHpI5UxdUswyinXE")
      .then(() => {
        toast.success("Your message has been submitted!");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "", file: null });
      })
      .catch(() => toast.error("Failed to send message!"));
  };

  return (
    <div className="bg-richblack-800">
    <div className="w-full  max-w-2xl mx-auto p-8 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-white mb-4">Get in Touch</h2>
      <p className="text-center text-white mb-6">
        We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
        <div className="space-y-4">
          <input 
            type="text" 
            name="name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <input 
            type="email" 
            name="email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <input 
            type="tel" 
            name="mobile" 
            required 
            value={formData.mobile} 
            onChange={handleChange} 
            placeholder="Your Mobile No." 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            placeholder="Subject" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all h-32"
          />
          <input 
            type="file" 
            name="file" 
            onChange={handleFileChange} 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
