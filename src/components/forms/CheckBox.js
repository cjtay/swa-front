import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";

const CheckBox = props => {
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
                <div key={option.key} className="checkbox">
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                    className="focus:ring-swa-3 text-swa-3"
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

export default CheckBox;
