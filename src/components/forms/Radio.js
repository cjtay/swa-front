import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";

const Radio = props => {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <div className="flex space-x-6 ">
        <Field name={name} {...rest} className="">
          {({ field }) => {
            return options.map(option => {
              return (
                <div key={option.key} className="radio">
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.value}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Radio;
