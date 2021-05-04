import React from 'react';
import styled from 'styled-components';

export const MainWrapper = styled.main`
  margin-top: 200px;
  min-height: 100vh;
`;

const Body: React.FunctionComponent = ({ children }) => (
  <MainWrapper>{children}</MainWrapper>
);

export default Body;
