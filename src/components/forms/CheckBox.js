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
                <div
                  key={option.key}
                  className="w-32 p-2 mb-2 space-x-2 bg-gray-200 rounded text-swa-3"
                >
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
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
