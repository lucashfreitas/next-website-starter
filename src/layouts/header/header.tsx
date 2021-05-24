/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import { themeGet } from '@styled-system/theme-get';
import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import { HeaderData } from '../../data/global/header';
import useScrollPosition from '../../hooks/useScrollPosition';
import Nav from './nav';

const HeaderWrapper = styled.header<{ scroll?: boolean }>`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  ${(props) =>
    props.scroll &&
    css`
      background: ${themeGet('components.header.background')};
    `};

  width: 100%;

  .container {
    max-width: 90%;
    margin: 0 auto;
    height: 7.5rem;
    display: flex;
  }

  .logo {
    flex-shrink: 1;
    width: 10%;
    height: 100%;
    position: relative;
  }

  nav {
    padding-left: 5rem;
    width: 90%;
  }
`;

const Header: React.FunctionComponent<HeaderData> = (props) => {
  const scroll = useScrollPosition();
  const { logo, menu } = props;

  return (
    <HeaderWrapper scroll={scroll.y > 0}>
      <div className="container">
        <div className="logo">
          <Image
            className="logo"
            layout="fill"
            objectFit="contain"
            src={logo}
          />
        </div>

        <Nav items={menu}></Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
