import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { Link } from "gatsby";

// --- Form imports ---
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Ring } from "react-awesome-spinners";

import FormikControl from "../../components/forms/FormikControl";
// --------------------

const MasterForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(0);
  const [file, setFile] = useState(null);

  const initialValues = {
    honey: "",
    type: "",
    name: "",
    radio: "",
    checkbox: [],
    dob: "",
    dob2: "",
    file: "",

    email: "test@test.com",
    phone: "123",

    message: "",
  };

  const handleUpload = event => {
    setFile(event.target.files[0].name);
    console.log("file: ", event.target.files[0].name);
  };

  const validateMessageLength = value => {
    setCount(value.length);
  };

  const onSubmit = async (values, onSubmitProps) => {
    // console.log("submitted data: ", values);

    setLoader(true);
    if (values.honey !== "") {
      setError("Spam suspected");
      console.log("spam suspected");
      setLoader(false);
    } else {
      try {
        let newDate = new Date(values.dob).toISOString();
        let newDate2 = new Date(values.dob2).toISOString();
        const formData = new FormData();
        formData.append("data", JSON.stringify(values));
        formData.append("files.file", file);
        formData.append("dob", newDate);
        formData.append("dob2", newDate2);
        for (var pair of formData.entries()) {
          console.log("formData: ", pair[0] + ", " + pair[1]);
        }

        // const response = await fetch("http://localhost:1337/formcontacts", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(values),
        // });
        // const data = await response.json();
        setLoader(false);
        onSubmitProps.resetForm();
        console.log("Successfully sent to Strapi!");
        // console.log("response received: ", data);
        // if (data.statusCode) {
        //   setError(data.message);
        // } else if (data.created_at) {
        setSuccess(true);
        // }
      } catch (error) {
        console.log("error received: ", error.message);
        setLoader(false);
      }
    }
  };

  const validationSchema = Yup.object({
    type: Yup.string().required("Please select one"),
    name: Yup.string()
      .required("Please provide your name")
      .max(50, "Max 50 characters"),
    radio: Yup.string().required("Please select one radio button"),
    checkbox: Yup.array().required("Please select one or more checkboxes"),
    dob: Yup.date().required("Select a date").nullable(),
    dob2: Yup.date().required("Select a date").nullable(),
    // file: Yup.file().required("Please upload a file"),
    message: Yup.string()
      .required("Please enter your message")
      .max(1000, "Max 1000 characters"),
  });

  const optionList = [
    { key: "0", value: "Choose one" },
    { key: "1", value: "General" },
    { key: "2", value: "Feedback" },
    { key: "3", value: "Complaint" },
    { key: "4", value: "Others" },
  ];

  const radioOptions = [
    { key: "1", value: "Complaint" },
    { key: "2", value: "General" },
    { key: "3", value: "Feedback" },
  ];

  const checkBoxOptions = [
    { key: "1", value: "Apple" },
    { key: "2", value: "Orange" },
    { key: "3", value: "Pear" },
  ];

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
                {!success && (
                  <>
                    <FormikControl
                      control="input"
                      type="hidden"
                      name="honey"
                      value=""
                    />
                    <div className="space-y-6 sm:flex sm:space-x-2 sm:space-y-0">
                      <div className="sm:w-1/2">
                        <FormikControl
                          control="select"
                          type="text"
                          name="type"
                          label="Dropdown list"
                          options={optionList}
                        />
                      </div>
                      <div className="sm:w-1/2">
                        <FormikControl
                          control="input"
                          type="text"
                          label="Text input"
                          name="name"
                        />
                      </div>
                    </div>
                    <div>
                      <FormikControl
                        control="radio"
                        label="Radio options"
                        name="radio"
                        options={radioOptions}
                      />
                    </div>
                    <div>
                      <FormikControl
                        control="checkbox"
                        label="Checkbox options"
                        name="checkbox"
                        options={checkBoxOptions}
                      />
                    </div>
                    <div>
                      <FormikControl
                        control="date"
                        type="date"
                        label="Date of Birth"
                        name="dob"
                      />
                    </div>
                    <div>
                      <FormikControl
                        control="datepicker"
                        label="Date of Birth"
                        name="dob2"
                      />
                    </div>
                    <div>
                      <FormikControl
                        control="file"
                        label="Upload a file"
                        name="file"
                        onChange={handleUpload}
                      />
                    </div>
                    <p className="text-sm text-right text-gray-500">
                      File selected: {file}
                    </p>
                    <div>
                      <FormikControl
                        control="textarea"
                        type="textarea"
                        label="Text Area"
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
                  </>
                )}
                {loader ? (
                  <Ring color="#A855F7" size="40" sizeUnit="px" />
                ) : success ? (
                  <>
                    <p className="font-bold text-center text-green-500">
                      Your enquiry has been submitted
                    </p>
                    <Link to="/">
                      <p className="font-bold text-center underline text-swa-3">
                        Back to Home
                      </p>
                    </Link>
                  </>
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

export default MasterForm;
