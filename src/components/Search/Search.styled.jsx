import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 55px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background-color: var(--color-accent);
  color: var(--color-text);
  border-radius: 50px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 700px;
  border: none;
  outline: none;
  padding: 15px 15px 15px 65px;
  background-color: var(--color-primary);
  font-size: 20px;
  color: var(--color-text);
`;
