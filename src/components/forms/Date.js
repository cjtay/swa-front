import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";

const Date = props => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Field
        type="date"
        id={name}
        name={name}
        {...rest}
        className="block px-4 py-2 rounded focus:outline-none focus:border-purple-400"
      />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Date;
