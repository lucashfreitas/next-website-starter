import { themeGet } from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1.27rem 2.8rem;
  background-color: #fa5a5f;
  color: white;
  font-family: ${themeGet('fonts.bold')};
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
`;

const Button: React.FC = () => {
  return <StyledButton>aaa</StyledButton>;
};

export default Button;
