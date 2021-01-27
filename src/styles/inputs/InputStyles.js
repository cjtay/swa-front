import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-lightgrey);
  max-width: 900px;
  border-radius: 10px;
  margin: 2em auto;
  padding: 2em;

  button {
    padding: 0.3em 1em;
    margin: 0 auto;
    background-color: darkgrey;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 1.5em auto;

  label {
    margin-right: 1em;
    font-weight: 700;
    color: var(--color-primary-1);
  }

  input,
  textarea {
    padding: 0.5em;
    font-size: 1rem;
    color: grey;
    border: 1px solid #888;
    outline: none;

    :focus {
      box-shadow: 2px 2px 2px 2px var(--color-primary-light);
    }
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: lightgrey;
  }

  button {
    background-color: var(--color-primary-1);
    color: white;
  }

  .spinner {
    text-align: center;
  }
`;
