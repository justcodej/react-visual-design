var _excluded = ['value'];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
import React, { useContext, useEffect, useState } from 'react';
import { connect, mapProps } from '@formily/react';
import { KpFileManage } from '@boluome/filemanage-react-component-library';
import { message } from 'antd';
import { PHOTO_TYPES, MAX_UPLOAD_SIZE } from '../../consts';
import VisualDesignContext from '../../VisualDesign/context';
var useKpFileManageProps = function useKpFileManageProps(_ref) {
  var value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(VisualDesignContext),
    headers = _useContext.headers;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedList = _useState2[0],
    setSelectedList = _useState2[1];
  var beforeUpload = function beforeUpload(files) {
    console.log(files, '上传图片前');
    var _files$ = files[0],
      name = _files$.name,
      size = _files$.size;
    if (!PHOTO_TYPES.test(name)) {
      message.warning('上传的图片格式不正确');
      return false;
    }
    if (size > MAX_UPLOAD_SIZE * 2) {
      message.warning('上传的图片大于2M');
      return false;
    }
    return true;
  };
  var onChange = function onChange(list) {
    var _list$;
    setSelectedList(list);
    rest.onChange(((_list$ = list[0]) === null || _list$ === void 0 ? void 0 : _list$.url) || '');
    rest.onBlur();
  };
  useEffect(
    function () {
      setSelectedList(
        value
          ? [
              {
                url: value,
              },
            ]
          : [],
      );
    },
    [value],
  );
  return _objectSpread(
    _objectSpread({}, rest),
    {},
    {
      headers: headers,
      selectedList: selectedList,
      beforeUpload: beforeUpload,
      onChange: onChange,
    },
  );
};
var FileManage = connect(
  function (props) {
    return /*#__PURE__*/ React.createElement(
      KpFileManage,
      _objectSpread({}, useKpFileManageProps(props)),
    );
  },
  mapProps(function (props) {
    return props;
  }),
);
export default FileManage;
