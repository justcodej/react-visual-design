import React from 'react';
import { NavBar } from 'antd-mobile';
var Header = function Header(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/ React.createElement(NavBar, null, data.dataSource.name);
};
Header.displayName = 'Header';
Header.defaultProps = {
  attr: {
    name: '页面全局配置',
  },
};
export default Header;
