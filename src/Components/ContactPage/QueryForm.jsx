import React, { useState } from 'react';
import './form.css';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Database part
    const formData = {
      name:e.target.name.value,
      email:e.target.email.value,
      message:e.target.message.value,
    }

    try {
      const response = await fetch('http://localhost:3002/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }


    // Use Vite-specific environment variable
    const apiUrl = import.meta.env.VITE_API_URL ;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your query has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send query. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default QueryForm;