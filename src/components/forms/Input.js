import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";

const Input = props => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Field id={name} name={name} {...rest} className="input-text" />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Input;
