import React from 'react';
import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';

const { Header: AntdHeader, Footer: AntdFooter } = AntdLayout;

import Navigation from '@components/Navigation';

const StyledAntdLayout = styled(AntdLayout)<{ nofooter: number }>`
  min-height: calc(100vh - ${(props) => (props.nofooter ? 70 : 0)}px);

  display: flex;
  flex-direction: row;

  div {
    flex: 1;
  }
`;

const StyledAntdFooter = styled(AntdFooter)`
  text-align: center;
`;

type LayoutProps = {
  noFooter?: boolean;
  children: React.ReactNode;
};

const Footer = () => (
  <StyledAntdFooter>Created by Ethan Ash</StyledAntdFooter>
);

const Layout = ({ noFooter = false, children }: LayoutProps) => (
  <AntdLayout>
    <AntdHeader
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        height: '56px',
        padding: 0,
        margin: 0,
      }}
    >
      <Navigation />
    </AntdHeader>
    <StyledAntdLayout nofooter={noFooter ? 0 : 1}>
      {children}
    </StyledAntdLayout>
    {!noFooter && <Footer />}
  </AntdLayout>
);

export { Footer };

export default Layout;
