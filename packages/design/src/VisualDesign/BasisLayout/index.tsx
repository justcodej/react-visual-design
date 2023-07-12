import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Wrapper, Header } from './index.styled';

export type BasisLayoutProps = {
  title: string;
  actions: ReactNode;
};

const BasisLayout: FC<PropsWithChildren<BasisLayoutProps>> = ({
  title,
  actions: actions,
  children,
}) => {
  return (
    <Wrapper>
      <Header>
        <span>{title}</span>
        {actions}
      </Header>
      <div className="basis-layout-view">{children}</div>
    </Wrapper>
  );
};

export default BasisLayout;
