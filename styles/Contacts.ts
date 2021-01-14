import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: var(--error);
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 14px;
  }

  @media (max-width: 760px) {
    h1 {
      color: var(--error);
      font-size: 16px;
    }

    p {
      font-weight: 400;
      font-size: 11.5px;
      line-height: normal;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 45px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContactDetails = styled.div`
  .times,
  .contato,
  .social {
    > span {
      color: var(--error);
    }
  }

  .contato a,
  .social a {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 1000px) {
    margin-top: 55px;
    margin-bottom: 45px;
    width: 96%;
  }
`;

export const Form = styled.form`
  width: 520px;

  .form-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  input {
    height: 45px;
    width: 48%;
    border: 1px solid var(--secondary);
    border-radius: 3px;
    color: var(--background);
    padding: 4px;
    background: transparent;
  }

  textarea {
    height: 90px;
    padding: 4px;
    background: transparent;
    width: 100%;
    border: 1px solid var(--secondary);
    border-radius: 3px;
    color: var(--background);
  }

  button {
    border: none;
    background: var(--error);
    color: var(--background);
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;
    width: 180px;
    height: 45px;
    font-size: 1.125rem;
    margin-top: 10px;
  }

  @media (max-width: 760px) {
    width: 96%;

    .form-group {
      flex-direction: column;
      margin-bottom: 0;
    }

    input {
      width: 100%;
      margin-bottom: 10px;
    }

    button {
      font-size: 16px;
      width: 100px;
      height: 45px;
    }
  }
`;
