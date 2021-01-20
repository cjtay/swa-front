import React from "react";
import { useFormik } from "formik";

import styled from "styled-components";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    onSubmit: async values => {
      console.log("submitted data: ", values);
      const response = await fetch("http://localhost:1337/contact-forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).catch(error => console.log("error received: ", error));
      const data = await response.json();
      console.log("Successfully sent to Strapi!");
      console.log("response received: ", data);
    },
  });

  console.log("form values: ", formik.values);

  return (
    <div>
      <h1>Contact Form</h1>
      <FormContainer
        name="contact form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={formik.handleSubmit}
      >
        <FormGroup>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </FormGroup>
        <button type="submit">Submit</button>
      </FormContainer>
    </div>
  );
};

export default ContactForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-3);
  max-width: 900px;
  border-radius: 10px;
  margin: 2em auto;
  padding: 2em;

  button {
    padding: 0.3em 1em;
    margin: 0 auto;
    background-color: darkgrey;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1em auto;

  label {
    margin-right: 1em;
    font-weight: 700;
    color: var(--color-white);
  }

  input {
    padding: 0.5em;
    font-size: 1rem;
    color: grey;
  }
`;
