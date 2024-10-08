'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _antdMobile = require('antd-mobile');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Header = function Header(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/ _react.default.createElement(_antdMobile.NavBar, null, data.dataSource.name);
};
Header.displayName = 'Header';
Header.defaultProps = {
  attr: {
    name: '页面全局配置',
  },
};
var _default = Header;
exports.default = _default;
