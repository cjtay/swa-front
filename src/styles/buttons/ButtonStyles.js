import styled from "styled-components";

export const Button = styled.div`
  display: inline-block;
  padding: 0.4em 1.2em;
  border-radius: 0.3em;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: ${props => (props.big ? "1.2em" : "1em")};
`;

export const ButtonDark = styled(Button)`
  background-color: var(--color-primary-1);
  color: var(--color-white);
  :hover {
    background-color: var(--color-primary-4);
    color: var(--color-white);
  }
`;

export const ButtonLight = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-primary-1);
  :hover {
    background-color: var(--color-primary-4);
    color: var(--color-white);
  }
`;
