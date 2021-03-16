import React, { useState } from "react";
import Layout from "../../components/layout/layout";

// --- Form imports ---
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Ring } from "react-awesome-spinners";

import FormikControl from "../../components/forms/FormikControl";
import TextArea from "../../components/forms/TextArea";
// --------------------

const ContactForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(0);

  const initialValues = {
    honey: "",
    name: "",
    company: "test",
    email: "test@test.com",
    phone: "123",
    address: "test",
    message: "",
  };

  const validateMessageLength = value => {
    setCount(value.length);
  };

  const onSubmit = async (values, onSubmitProps) => {
    console.log("submitted data: ", values);

    setLoader(true);
    if (values.honey !== "") {
      setError("Spam suspected");
      console.log("spam suspected");
      setLoader(false);
    } else {
      try {
        const response = await fetch("http://localhost:1337/formcontacts", {
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
    name: Yup.string()
      .required("Please provide your name")
      .max(50, "Max 50 characters"),
    message: Yup.string()
      .required("Please enter your message")
      .max(1000, "Max 1000 characters"),
  });

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
              <Form className="p-8 mt-6 space-y-6 bg-gray-100">
                <div className="space-y-6 sm:flex sm:space-x-2 sm:space-y-0">
                  <div className="sm:w-1/2">
                    {/* <Field type="hidden" name="honey" value="" /> */}
                    <FormikControl
                      control="input"
                      type="hidden"
                      name="honey"
                      value=""
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Name"
                      name="name"
                    />
                  </div>
                </div>
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

                {loader ? (
                  <Ring color="#A855F7" size="40" sizeUnit="px" />
                ) : success ? (
                  <p className="font-bold text-center text-green-500">
                    Your enquiry has been submitted
                  </p>
                ) : error ? (
                  <>
                    <p className="font-bold text-center text-red-600">
                      We have encountered an error - {error} <br />
                    </p>
                    <p className="text-center text-red-600">
                      Please try again. If problem persist, please email us
                      directly at contactus@singaporewomenassociation.org
                    </p>
                  </>
                ) : (
                  <button className="btn-dark" type="submit">
                    Submit
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </>
  );
};

export default ContactForm;
