import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const BannerStyled = styled.div``;

const HeroBanner: React.FC = (props) => {
  const { children } = props;

  return (
    <BannerStyled>
      <Image
        layout="fill"
        src="https://www.medsailors.com/static/266e98d0816659953c7edc29b310fa88/05b6c/medsailors-greece-croatia-sailing-holidays.jpg"
      />

      {props.children}
    </BannerStyled>
  );
};

export default HeroBanner;
