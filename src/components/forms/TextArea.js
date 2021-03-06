import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";

const TextArea = props => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        className="textarea "
      />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default TextArea;
