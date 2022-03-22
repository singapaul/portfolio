import React, { useState } from "react";
import "./Contactform.scss";

const Form = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;

    // validate the form
    if (!name || !email || !email.includes("@")) {
      setHasError(true);
      return;
    }

    // do form stuff here... omitted for sake of exercise
    setHasError(false);
    setHasSubmitted(true);
  };

  return (
    <>
      {!hasSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit} name="form">
          <div className="contact-form__pair">
            <label htmlFor="username-input">Name</label>
            <input
              id="username-input"
              type="text"
              placeholder="e.g. John Doe"
            />
          </div>
          <div className="contact-form__pair">
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              type="text"
              placeholder="e.g. test@test.com"
            />
          </div>
          <div className="contact-form__pair">
            <label htmlFor="message-input">Message</label>
            <textarea name="" id="message-input"  rows="8" cols="30"></textarea>
          </div>
          <button className="contact-form__button" id="form-submit">
            Submit
          </button>
          {hasError && <div className="alert">Sorry something went wrong</div>}
        </form>
      ) : (
        <div>
          <p className="success">
            Thank you for your message! I'll be in touch
          </p>
        </div>
      )}
    </>
  );
};

export default Form;
