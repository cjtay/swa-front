import React, { useState } from "react";
import Layout from "../../components/layout/layout";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/forms/FormikControl";
import TextArea from "../../components/forms/TextArea";
import { Ring } from "react-awesome-spinners";

const Enquiry = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(0);

  const initialValues = {
    email: "",
    message: "abc",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });

  const validateMessageLength = value => {
    setCount(value.length);
  };

  const onSubmit = values => console.log("Form data", values);

  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <div className="max-w-3xl px-4 mx-auto my-12 antialiased text-gray-800">
          <h1 className="text-4xl font-black">Contact Us Form</h1>
          <p className="text-gray-500">We love to hear from you.</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {formik => (
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  label="email"
                  name="email"
                />
                <div>
                  <TextArea
                    control="textarea"
                    type="textarea"
                    label="Message Component"
                    name="message"
                    rows="5"
                    col="35"
                    validate={validateMessageLength}
                    maxLength="1001"
                  />
                  <p className="text-sm text-right text-gray-500">
                    Number of characters: {count} (max 1000)
                  </p>
                </div>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </>
  );
};

export default Enquiry;
