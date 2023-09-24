import styled from 'styled-components';

export const ContactListContainer = styled.ul`
  margin: 0;
  padding: 15px;
  width: 100%;
  height: 100%;
`;

export const List = styled.li`
  display: flex;
  gap: 15px;

  align-items: center;
`;

export const Item = styled.p`
  font-size: 24px;

  color: rgb(96, 149, 255);
`;

export const Button = styled.button`
  width: 150px;
  border: solid 3px #202020;
  border-radius: 5px;
  cursor: pointer;
  height: 100%;
  background-color: #ff0000;
  color: rgb(0, 0, 0);

  :hover,
  :focus {
    background-color: #66b2ff;
  }
`;
