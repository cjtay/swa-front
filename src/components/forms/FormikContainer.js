// this is for testing only

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });

  onSubmit = values => console.log("Form data", values);
  return (
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
          <button type="button">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
