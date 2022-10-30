import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  h1 {
    font-size: 1.5rem;
    color: var(--text-title);
    margin-bottom: 2rem;
    text-align: center;
    background-color: (--background);
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;;

      &:first-child {
        color: var(--text-title)
      }

      &:last-child {
        text-align: center;
      }
    }
    
    input {
      margin-left: 1rem;
      padding: 1.5rem;
      width: 1.1rem;
      height: 1.1rem;
    }
    
    img {
      width: 15px;
    }
  }

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    margin-left: 1rem;

    transition: filter 0.2s; //leva 0.2s para o filter

    &:hover {
      filter: brightness(0.9);
    }

    &:nth-last-child(even) {
      text-align: center;
      background: none;
      padding: 0 0.5rem;
    }
  }

  #bulk-delete-btn {
    margin-left: 85%;
    background-color: red;
  }
  @media (max-width: 520px) {
    font-size: 87.5%; // 14px

      #bulk-delete-btn {
      padding: 0 1rem;
      margin-left: 17rem;
      margin-top: 0.5rem;
      background-color: red;
    }
  }
`