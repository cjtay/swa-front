import React, { useState } from "react";
import Layout from "../../components/layout/layout";

// --- Form imports ---
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Ring } from "react-awesome-spinners";
import TextError from "../../components/TextError";
// --------------------

const ContactForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(0);

  const initialValues = {
    honey: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
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
    company: Yup.string().max(50, "Max 50 characters"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email address is required"),
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
          <h1 className="text-4xl font-black">Enquiry Form</h1>
          <p className="text-gray-500">We love to hear from you.</p>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validateOnChange={false}
            // validateOnBlur={false}
          >
            <Form className="p-8 mt-6 space-y-6 bg-gray-100">
              <div className="space-y-6 sm:flex sm:space-x-2 sm:space-y-0">
                <div className="sm:w-1/2">
                  <Field type="hidden" name="honey" value="" />
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <ErrorMessage name="name" component={TextError} />
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="input-text"
                  />
                </div>
                <div className="sm:w-1/2">
                  <label htmlFor="company" className="label">
                    Company Name
                  </label>
                  <ErrorMessage name="company" component={TextError} />
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    placeholder="optional"
                    className="input-text"
                  />
                </div>
              </div>
              <div className="space-y-6 sm:flex sm:space-x-2 sm:space-y-0">
                <div className="sm:w-1/2">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <ErrorMessage name="email" component={TextError} />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="input-text"
                  />
                </div>
                <div className="sm:w-1/2">
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                  <ErrorMessage name="phone" component={TextError} />
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="optional"
                    className="input-text"
                  />

                  <p className="text-sm text-gray-400">
                    Please include the country code for non-Singapore number.
                  </p>
                </div>
              </div>
              <div>
                <label htmlFor="address" className="font-bold">
                  Address
                </label>
                <ErrorMessage name="address" component={TextError} />
                <Field
                  as="textarea"
                  name="address"
                  placeholder="optional"
                  className="textarea"
                />

                <p className="text-sm text-gray-400">
                  Please provide your mailing address only if you require us to
                  reply by mail
                </p>
              </div>
              <div>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <ErrorMessage name="message" component={TextError} />
                <Field
                  as="textarea"
                  name="message"
                  rows="5"
                  col="35"
                  className="textarea"
                  validate={validateMessageLength}
                  maxlength="1001"
                />
                <p className="text-sm text-right text-gray-500">
                  Number of characters: {count} (max 1000)
                </p>
              </div>
              <div>
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
              </div>
              <div></div>
            </Form>
          </Formik>
        </div>
      </Layout>
    </>
  );
};

export default ContactForm;
