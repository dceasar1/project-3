import React, { useState } from 'react';
import "./contact.css"

function Contact() {
  // Initialize state for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  // Handle form field changes
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  // Handle form submission 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      comments
    };
    console.log('Form submitted:', formData);
   
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us!</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={handleCommentsChange}
            placeholder="Your comments"
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
