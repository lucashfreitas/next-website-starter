import React from 'react';
import styled from 'styled-components';

const BannerStyled = styled.div`
  display: flex;
`;

const HeroBanner: React.FC = (props) => {
  const { children } = props;

  return <BannerStyled>{props.children}</BannerStyled>;
};

export default HeroBanner;
