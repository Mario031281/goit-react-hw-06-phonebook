import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  margin-bottom: 10px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Label = styled.label`
  padding: 0;
  color: black;
  margin-bottom: 10px;
  margin-left: 40px;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  text-align: start;
  font-size: 24px;
`;

export const Input = styled.input`
  margin: 0px;
  width: 250px;
  height: 100%;
  max-height: 105px;
  border: solid 1px #202020;
  font-size: 18px;
  border-radius: 5px;

  height: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
`;

export const Button = styled.button`
  width: 150px;
  border: solid 3px #202020;
  border-radius: 5px;
  cursor: pointer;
  height: 100%;
  margin-bottom: 10px;
  margin-left: 40px;
  background-color: rgb(0, 255, 0);
  color: rgb(0, 0, 0);

  :hover,
  :focus {
    cursor: pointer;
    border: solid 3px #66b2ff;
  }
`;
