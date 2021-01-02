import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const DropDownContent = ({ content }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown>
      <button onClick={() => setOpen(!open)}>
        <div>Select</div>
        <IoIosArrowDown />
      </button>
      {open && <DropdownContent>{content}</DropdownContent>}
    </Dropdown>
  );
};

export default DropDownContent;

const DropdownContent = styled.div`
  display: block;
  position: absolute;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--color-white);
  z-index: 1;

  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    :hover {
      background-color: #ddd;
    }
  }
`;

const Dropdown = styled.div`
  overflow: hidden;

  /* :hover ${DropdownContent} {
    display: block; */
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 1em;
    width: 220px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: inherit;
    border-radius: 5px;
    border: 1px solid var(--color-primary-1);
    font-weight: 300;
  }
`;
