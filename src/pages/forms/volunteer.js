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

const VolunteerForm = setFieldValue => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const initialValues = {
    honey: "",
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  };

  const onSubmit = async (values, onSubmitProps) => {
    console.log("submitted data: ", values);

    const formData = new FormData();
    formData.append("data", JSON.stringify(values));

    setLoader(true);
    if (values.honey !== "") {
      setError("Spam suspected");
      console.log("spam suspected");
    } else {
      try {
        const response = await fetch("http://localhost:1337/volunteer-forms", {
          method: "POST",
          body: formData,
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
    phone: Yup.number().required("A phone number is required"),
    message: Yup.string().required("Please enter your message"),
  });

  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <SectionHead>
            <Title>Volunteer with SWA</Title>

            <Description>
              SWA welcome donations and support from individuals and corporate
              member volunteers for supporting our charity efforts. You can be
              part of us and contribute your time or expertise to help us with
              administrative matters and management of our charity programmes
              and projects.
            </Description>
          </SectionHead>
          <FormContainer>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <FormGroup>
                  <input type="hidden" name="honey" value="honey" />
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
                  <Field type="tel" id="phone" name="phone" />
                  <ErrorMessage name="phone" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="type">Type</label>
                  <Field name="type" as="select" id="type">
                    <option disabled value="">
                      please select
                    </option>
                    <option value="dinner">Charity Dinner</option>
                    <option value="svp">Singapore Vision Care Programme</option>
                    <option value="admin">SWA Office Administration</option>
                    <option value="ndp">
                      National Day Celebrations with Nursing Homes
                    </option>
                    <option value="photography">Event Photography</option>
                    <option value="design">Creative Design</option>
                    <option value="others">Others</option>
                  </Field>
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
            </Formik>
          </FormContainer>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default VolunteerForm;
