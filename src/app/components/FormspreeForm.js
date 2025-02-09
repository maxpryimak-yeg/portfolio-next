'use client';

import { useForm } from '@formspree/react';

export default function FormspreeForm({ className = '' }) {
  const [state, handleSubmit] = useForm('mlddokal'); // Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <div className="text-center bg-backdrop_background p-4 text-green-600">
        <p>Thank you!</p>
        <p>Your message has been successfully sent. We&#39;ll get back to you soon!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 w-full ${className}`}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-3xl mb-2"
        >
          What is your name?
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full bg-backdrop_background border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:shadow-md"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-3xl mb-2"
        >
          Please enter an email address for contact.
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full bg-backdrop_background border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:shadow-md"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-3xl mb-2"
        >
          Please tell us a little about the project and its needs.
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          required
          className="w-full bg-backdrop_background border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:shadow-md"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="text-[1.8rem] leading-[1.8rem] inline-block bg-backdrop_background text-black py-7 px-8 rounded-full hover:bg-glorious transition-background duration-200"
      >
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}