import React from 'react';
import { Wrapper, Header } from './index.styled';
var BasisLayout = function BasisLayout(_ref) {
  var title = _ref.title,
    actions = _ref.actions,
    children = _ref.children;
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    null,
    /*#__PURE__*/ React.createElement(
      Header,
      null,
      /*#__PURE__*/ React.createElement('span', null, title),
      actions,
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'basis-layout-view',
      },
      children,
    ),
  );
};
export default BasisLayout;
