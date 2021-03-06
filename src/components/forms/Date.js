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
      <Field type="date" id={name} name={name} {...rest} className="date" />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Date;
