import React from 'react';
import styled from 'styled-components';
import SEO from '../containers/seo/seo';
import { HeaderData } from '../data/global/header';
import { SEOData } from '../data/seo';
import Body from './body';
import Header from './header/header';

interface LayoutProps {
  seo?: SEOData;
  header: HeaderData;
}

const LayoutWrapper = styled.div``;

const Layout: React.FunctionComponent<LayoutProps> = ({
  header,
  seo,
  children,
}) => (
  <LayoutWrapper>
    {seo && <SEO {...seo} />}
    <Header {...header} />
    <Body>{children}</Body>
  </LayoutWrapper>
);

export default Layout;
