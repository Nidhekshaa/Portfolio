import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-q0q9.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        setStatus(result.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Get in touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <textarea rows="6" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit" className="submit-btn">Send Message</button>
        <p className={`status-msg ${status.includes("successfully") ? "success" : "error"}`}>
  {status}
</p>

      </form>
    </section>
  );
};

export default Contact;
