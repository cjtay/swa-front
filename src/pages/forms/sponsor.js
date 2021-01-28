import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { Wrapper, ContentWrapper } from "../../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../../styles/SectionHeaders";
import SectionBackground from "../../components/backgrounds/SectionBackground";
import { ErrorMsg, SuccessMsg } from "../../styles/StatusStyles";
import { FormContainer, FormGroup } from "../../styles/inputs/InputStyles";
import { Ring } from "react-awesome-spinners";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SponsorForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const initialValues = {
    honey: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const onSubmit = async (values, onSubmitProps) => {
    console.log("submitted data: ", values);
    console.log("onSubmit : ", Form);
    setLoader(true);
    if (values.honey !== "") {
      setError("Spam suspected");
      console.log("spam suspected");
    } else {
      try {
        const response = await fetch("http://localhost:1337/sponsorforms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        setLoader(false);
        onSubmitProps.resetForm();
        console.log("Successfully sent to Strapi!");
        console.log("response received: ", data);
        if (data.statusCode) {
          setError(data.message);
        } else if (data.created_at) {
          setSuccess(true);
        }
      } catch (error) {
        console.log("error received: ", error.message);
        setLoader(false);
      }
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please provide your name"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email address is required"),
    message: Yup.string().required("Please enter your message"),
  });

  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <SectionHead>
            <Title>Talk to us for other sponsorship opportunities</Title>

            <Description>
              To find out more, kindly contact us by the following ways:
              <p>Telephone: +65 6286 8702</p>
              <p>Fax: +65 6288 9172</p>
            </Description>
          </SectionHead>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <FormContainer>
              <Form>
                <FormGroup>
                  <input type="hidden" name="honey" value="honey" />
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="company">Company Name</label>
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    placeholder="optional"
                  />
                  <ErrorMessage name="company" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="phone">Phone</label>
                  <Field type="tel" id="phone" name="phone" />
                  <ErrorMessage name="phone" component={ErrorMsg} />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" name="message" rows="5" col="35" />
                  <ErrorMessage name="message" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <button type="submit">Submit</button>
                  <div className="spinner">
                    {loader && (
                      <Ring
                        color={"var(--color-primary-3)"}
                        size="40"
                        sizeUnit="px"
                      />
                    )}
                  </div>
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

export default SponsorForm;
