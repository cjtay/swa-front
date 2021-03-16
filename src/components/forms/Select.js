import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";

const Select = props => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Field as="select" id={name} name={name} {...rest} className=" select">
        {options.map(option => {
          if (option.key === 0) {
            return (
              <option
                key={option.key}
                value={option.value}
                selected
                disabled
                hidden
              >
                {option.value}
              </option>
            );
          } else {
            return (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            );
          }
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
