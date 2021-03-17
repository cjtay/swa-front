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

const MspiApplicationForm = setFieldValue => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [photo, setPhoto] = useState(null);

  const initialValues = {
    honey: "",
    name: "",
    nric: "",
    mobile: "",
    email: "",
    maritalStatus: "",
    education: "",
    occupation: "",
    facebook: "",
    instagram: "",
    dob: "",
    placeofBirth: "",
    height: "",
    weight: "",
    hobbies: "",
    availability: "",
  };

  const onSubmit = async (values, onSubmitProps) => {
    let newDate = new Date(values.dob).toISOString();
    console.log("submitted data: ", values.dob);
    console.log("date to ISO: ", newDate);

    console.log("photo uploaded: ", photo);

    const formData = new FormData();
    formData.append("data", JSON.stringify(values));
    formData.append("files.photo", photo);
    formData.append("dob", newDate);

    setLoader(true);
    if (values.honey !== "") {
      setError("Spam suspected");
      console.log("spam suspected");
    } else {
      try {
        for (var pair of formData.entries()) {
          console.log("formData: ", pair[0] + ", " + pair[1]);
        }
        const response = await fetch("http://localhost:1337/forms-mspis", {
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
    // name: Yup.string().required("Please provide your name"),
    // email: Yup.string()
    //   .email("Please enter valid email")
    //   .required("Email address is required"),
    // phone: Yup.number().required("A phone number is required"),
    // message: Yup.string().required("Please enter your message"),
  });

  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <SectionHead>
            <Title>MSPI Application Form</Title>

            <Description>
              Dating back to the first pageant organised in 1975, the Singapore
              Women’s Association (SWA) remains the first organisation to raise
              funds for the less fortunate and home to the Miss Singapore
              International Beauty Pageant. Themed “Beauty with Heart and
              Purpose”, the pageant encapsulates the true meaning behind the
              programme – to provide for the underprivileged through charity.
              Winners will be representing Singapore on the International stage
              at Miss International pageant, and Miss Supranational in Poland
              Only shortlisted candidates will be notified for an audition.
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
                  <label htmlFor="nric">NRIC</label>
                  <Field type="text" id="nric" name="nric" />
                  <ErrorMessage name="nric" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="mobile">Mobile No.</label>
                  <Field type="tel" id="mobile" name="mobile" />
                  <ErrorMessage name="mobile" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="maritalStatus">Martical Status</label>
                  <Field name="maritalStatus" as="select" id="maritalStatus">
                    <option disabled value="">
                      please select
                    </option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </Field>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="education">Education</label>
                  <Field name="education" as="select" id="education">
                    <option disabled value="">
                      please select
                    </option>
                    <option value="Master">Master Degree and above</option>
                    <option value="Degree">Degree</option>
                    <option value="Diploma">Diploma</option>
                    <option value="ALevel">A level</option>
                    <option value="OLevel">O level</option>
                    <option value="NLevel">N level</option>
                    <option value="NITEC">NITEC</option>
                    <option value="ITE">ITE</option>
                    <option value="PreUniversity">Pre-University</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Primary">Primary</option>
                    <option value="Certificate">Certificate</option>
                  </Field>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="occupation">Occupation</label>
                  <Field type="text" id="occupation" name="occupation" />
                  <ErrorMessage name="occupation" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="facebook">Facebook url</label>
                  <Field type="text" id="facebook" name="facebook" />
                  <ErrorMessage name="facebook" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="instagram">Instagram url</label>
                  <Field type="text" id="instagram" name="instagram" />
                  <ErrorMessage name="instagram" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="dob">Date of Birth</label>
                  <Field type="date" id="dob" name="dob" />

                  <ErrorMessage name="dob" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="placeofBirth">Place of Birth</label>
                  <Field type="text" id="placeofBirth" name="placeofBirth" />
                  <ErrorMessage name="placeofBirth" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="height">Height</label>
                  <Field
                    type="number"
                    id="height"
                    name="height"
                    placeholder="in cm"
                  />
                  <ErrorMessage name="height" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="weight">Weight</label>
                  <Field
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="in kg"
                  />
                  <ErrorMessage name="weight" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="hobbies">Hobbies and Interests</label>
                  <Field as="textarea" name="hobbies" rows="5" col="35" />
                  <ErrorMessage name="hobbies" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="availability">Availability</label>
                  <Field
                    as="textarea"
                    name="availability"
                    rows="5"
                    col="35"
                    placeholder="Please indicate the range of dates you will be available for MSPI activities"
                  />
                  <ErrorMessage name="availability" component={ErrorMsg} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="photo">Upload Photo</label>
                  <input
                    type="file"
                    name="photo"
                    onChange={event => {
                      setPhoto(event.target.files[0]);
                    }}
                  />
                  <ErrorMessage name="photo" component={ErrorMsg} />
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

export default MspiApplicationForm;
