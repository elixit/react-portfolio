import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Regular expression pattern for validating email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onSubmit = (formData) => {
    // Instead of alert, you can handle form submission here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register('senderName', {
              required: 'Your name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
              maxLength: { value: 80, message: 'Name cannot exceed 80 characters' },
            })}
            placeholder="Your Name"
          />
          <div className="error-message">{errors.senderName && errors.senderName.message}</div>
        </div>
        <div>
          <input
            type="text"
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: emailPattern,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email Address"
          />
          <div className="error-message">{errors.email && errors.email.message}</div>
        </div>
        <div>
          <textarea
            rows="4"
            {...register('message', {
              required: 'Your message is required',
            })}
            placeholder="Your Message"
          />
          <div className="error-message">{errors.message && errors.message.message}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
