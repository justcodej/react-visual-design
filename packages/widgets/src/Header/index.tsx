import React, { FC } from 'react';
import { NavBar } from 'antd-mobile';

type HeaderTypes = {
  appCode: string;
  data: any;
  attr?: any;
};

const Header: FC<HeaderTypes> = ({ data }) => {
  return <NavBar>{data.dataSource.name}</NavBar>;
};

Header.displayName = 'Header';
Header.defaultProps = {
  attr: {
    name: '页面全局配置',
  },
};

export default Header;
