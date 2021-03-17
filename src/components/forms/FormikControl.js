import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import Date from "./Date";

const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <Date {...rest} />;
    case "file":
    default:
      return null;
  }
};

export default FormikControl;
