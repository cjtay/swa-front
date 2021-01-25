import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { Wrapper, ContentWrapper } from "../../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../../styles/SectionHeaders";
import SectionBackground from "../../components/backgrounds/SectionBackground";
import { ButtonDark } from "../../styles/buttons/ButtonStyles";
import { ErrorMsg, SuccessMsg } from "../../styles/StatusStyles";
import { useFormik } from "formik";
import * as Yup from "yup";

import styled from "styled-components";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const onSubmit = async values => {
    console.log("submitted data: ", values);
    try {
      const response = await fetch("http://localhost:1337/contact-forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("Successfully sent to Strapi!");
      console.log("response received: ", data);
      if (data.statusCode) {
        setError(data.message);
      } else if (data.created_at) {
        setSuccess(true);
      }
    } catch (error) {
      console.log("error received: ", error.message);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please provide your name"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email address is required"),
    message: Yup.string().required("Please enter your message"),
  });

  // const validate = values => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "Please provide your name";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email address is required";
  //   }
  //   if (!values.message) {
  //     errors.message = "Please enter your message";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  console.log("formik: ", formik);
  console.log("form values: ", formik.values);

  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <SectionHead>
            <Title>Talk to us</Title>

            <Description>We love to hear from you.</Description>
          </SectionHead>
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
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <ErrorMsg>{formik.errors.name}</ErrorMsg>
              )}
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorMsg>{formik.errors.email}</ErrorMsg>
              )}
            </FormGroup>
            <FormGroup>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="optional"
              />
              {formik.touched.phone && formik.errors.phone && (
                <ErrorMsg>{formik.errors.ErrorMsghone}</ErrorMsg>
              )}
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && (
                <ErrorMsg>{formik.errors.message}</ErrorMsg>
              )}
            </FormGroup>
            <ButtonDark center onClick={formik.handleSubmit}>
              Submit
            </ButtonDark>
            {error !== "" && <ErrorMsg>Error encountered: {error}</ErrorMsg>}
            {success && <SuccessMsg>Submitted successfully</SuccessMsg>}
          </FormContainer>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default ContactForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-lightgrey);
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
  }

  input,
  textarea {
    padding: 0.5em;
    font-size: 1rem;
    color: grey;
  }

  input::placeholder {
    color: lightgrey;
  }
`;
