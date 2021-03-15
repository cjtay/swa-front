import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    case "file":
    default:
      return null;
  }
  return <div></div>;
};

export default FormikControl;
