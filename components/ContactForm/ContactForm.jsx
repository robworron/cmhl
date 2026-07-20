"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./contactform.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "",
  );
  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form className={styles.contactform} onSubmit={handleSubmit}>
      <div>
        <h2>Inquiries Form</h2>
        <h5>For direct inquiries, please fill out the form below</h5>
      </div>
      <div className={styles.contactformName}>
        <div className={styles.contactformItem}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            className={styles.contactformField}
            required
          />
          <ValidationError
            prefix="First Name"
            field="fname"
            errors={state.errors}
          />
        </div>
        <div className={styles.contactformItem}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            className={styles.contactformField}
            required
          />
          <ValidationError
            prefix="Last Name"
            field="lname"
            errors={state.errors}
          />
        </div>
      </div>
      <div className={styles.contactformItem}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.contactformField}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles.contactformItem}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className={styles.contactformField}
          style={{ height: "150px" }}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" className={styles.contactformButton}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
