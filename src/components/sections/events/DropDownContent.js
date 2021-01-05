import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const DropDownContent = ({ content }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        <div>Select</div>
        <IoIosArrowDown />
      </Button>
      {open && <DropdownContent>{content}</DropdownContent>}
    </>
  );
};

export default DropDownContent;

const DropdownContent = styled.div`
  display: block;
  position: absolute;
  width: 90%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--color-white-transparent);
  z-index: 1;
  border-radius: 10px;
  transition: 0.3s ease-in;

  @media (min-width: 600px) {
    width: 250px;
  }

  div {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    :hover {
      background-color: var(--color-black-transparent);
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3em 1em;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  /* background-color: inherit; */
  border-radius: 5px;
  border: 1px solid var(--color-primary-1);
  font-weight: 300;

  @media (min-width: 600px) {
    width: 250px;
  }
`;
