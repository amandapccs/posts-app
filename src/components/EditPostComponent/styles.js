import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    color: var(--text-title);
    margin-bottom: 1rem;
  }

  li {
    border-radius: 0.25rem;
    /* background-color: #e7e9ee; */
    margin-bottom: 1rem;
    padding: 0 1.5rem;
  }

  li:hover {
    background-color: #e7e9ee;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + input {
      margin-top: 1rem;
    }

  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`