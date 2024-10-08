'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.attachPropertiesToComponent = attachPropertiesToComponent;
exports.codeMessage = void 0;
exports.reactUnmount = reactUnmount;
exports.renderToBody = void 0;
Object.defineProperty(exports, 'request', {
  enumerable: true,
  get: function get() {
    return _request.default;
  },
});
var _reactDom = require('react-dom');
var _request = _interopRequireDefault(require('./request'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
// import { unmount as reactUnmount } from './render'
function attachPropertiesToComponent(component, properties) {
  var ret = component;
  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}
function reactUnmount(container) {
  return (0, _reactDom.unmountComponentAtNode)(container);
}
var renderToBody = function renderToBody(element) {
  var container = document.createElement('div');
  document.body.appendChild(container);
  function unmount() {
    var unmountResult = reactUnmount(container);
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
  (0, _reactDom.render)(element, container);
  return unmount;
};
exports.renderToBody = renderToBody;
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
exports.codeMessage = codeMessage;
