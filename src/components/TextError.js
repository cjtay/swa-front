import React from "react";

const TextError = props => {
  return (
    <div className="inline-block ml-1 text-sm text-red-600 bg-red-100 rounded ">
      {props.children}
    </div>
  );
};

export default TextError;
