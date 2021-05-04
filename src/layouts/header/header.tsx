/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import { HeaderData } from '../../data/global/header';
import Nav from './nav';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
  width: 100%;
  .container {
    display: flex;
  }
`;

const LogoImg = styled.img``;

const Header: React.FunctionComponent<HeaderData> = (props) => {
  const { logo, menu } = props;

  return (
    <HeaderWrapper>
      <div className="container">
        <LogoImg src={logo} />

        <Nav></Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
