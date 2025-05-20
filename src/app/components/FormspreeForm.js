'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDownRight } from '@awesome.me/kit-34cea924a0/icons/sharp/light';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function FormspreeForm() {
  const [state, handleSubmit] = useForm("mlddokal");

  if (state.succeeded) {
    return <p className="text-lg">Thanks for your message! We&apos;ll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block xs-mono mb-2">
          What is your name?
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full border-t-0 border-l-0 border-r-0 border-b border-glorious_border py-2 px-3 bg-[#e7e7e7] focus:outline-none focus:border-black"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block xs-mono mb-2">
          Please enter an email address for contact.
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full border-t-0 border-l-0 border-r-0 border-b border-glorious_border py-2 px-3 bg-[#e7e7e7] focus:outline-none focus:border-black"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      
      <div>
        <label htmlFor="message" className="block xs-mono mb-2">
          Please tell us a little about the project and its needs.
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          className="w-full border-t-0 border-l-0 border-r-0 border-b border-glorious_border py-2 px-3 bg-[#e7e7e7] focus:outline-none focus:border-black"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      
      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-main"
      >
        <FontAwesomeIcon icon={faArrowTurnDownRight} />
        Submit
      </button>
    </form>
  );
}