import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";

const Upload = props => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name} className="block label">
        {label}
      </label>
      <Field
        type="file"
        id={name}
        name={name}
        {...rest}
        className="px-2 py-1 border rounded border-swa-4"
      />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Upload;
