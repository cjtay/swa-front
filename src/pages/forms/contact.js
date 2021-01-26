import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { Wrapper, ContentWrapper } from "../../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../../styles/SectionHeaders";
import SectionBackground from "../../components/backgrounds/SectionBackground";
// import { ButtonDark } from "../../styles/buttons/ButtonStyles";
import { ErrorMsg, SuccessMsg } from "../../styles/StatusStyles";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
    console.log("onSubmit : ", Form);
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

  // console.log("formik: ", formik);
  // console.log("form values: ", formik.values);

  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <SectionHead>
            <Title>Talk to us</Title>

            <Description>We love to hear from you.</Description>
          </SectionHead>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <FormContainer>
              <Form>
                <FormGroup>
                  {/* <input type="hidden" name="form-name" value="contact" /> */}
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="optional"
                  />
                  <ErrorMessage name="phone" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" name="message" />
                  <ErrorMessage name="message" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  {/* <ButtonDark right onClick={onSubmit}>
                    Submit
                  </ButtonDark> */}
                  <button type="submit">Submit</button>
                  {error !== "" && (
                    <ErrorMsg>Error encountered: {error}</ErrorMsg>
                  )}
                  {success && <SuccessMsg>Submitted successfully</SuccessMsg>}
                </FormGroup>
              </Form>
            </FormContainer>
          </Formik>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default ContactForm;

const FormContainer = styled.div`
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
