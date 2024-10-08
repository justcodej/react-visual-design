var _excluded = ['link'];
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
import React, { useState, useRef, useEffect } from 'react';
import { useField, useFieldSchema, RecursionField, observer, useForm } from '@formily/react';
import { Image, message, Button, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { DragContainer, DragArea, FormArea } from './index.styled';
import { cloneDeep } from 'lodash';
var LIMIT_SIZE = 30;
var HotArea = observer(function (_ref) {
  var _parentForm$values,
    _parentForm$values$ba,
    _parentForm$values2,
    _parentForm$values2$b,
    _parentForm$values3,
    _parentForm$values3$b;
  var value = _ref.value;
  var field = useField();
  var schema = useFieldSchema();
  var dataSource = Array.isArray(field.value) ? field.value : [];
  var parentForm = useForm();
  if (!schema) throw new Error('can not found schema object');
  var containerRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    leftButtonDown = _useState2[0],
    setLeftButtonDown = _useState2[1]; // 鼠标左键按下
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    startX = _useState4[0],
    setStartX = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    startY = _useState6[0],
    setStartY = _useState6[1];
  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    hotAreaItem = _useState8[0],
    setHotAreaItem = _useState8[1];
  var handleMouseDown = function handleMouseDown(e) {
    if (e.buttons !== 1) return;
    if (dataSource.length > 7) {
      message.error('长度或条目数不能大于8');
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    setLeftButtonDown(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };
  var handleMouseMove = function handleMouseMove(e) {
    var _containerRef$current2;
    if (!leftButtonDown) return;
    e.preventDefault();
    e.stopPropagation();
    var _containerRef$current =
        (_containerRef$current2 = containerRef.current) === null ||
        _containerRef$current2 === void 0
          ? void 0
          : _containerRef$current2.getBoundingClientRect(),
      top = _containerRef$current.top,
      left = _containerRef$current.left;
    var nowX = e.clientX - left,
      nowY = e.clientY - top;
    top = Math.floor(top);
    left = Math.floor(left);
    setHotAreaItem({
      left: Math.min(startX - left, nowX),
      top: Math.min(startY - top, nowY),
      width: Math.abs(e.clientX - startX),
      height: Math.abs(e.clientY - startY),
      link: '',
    });
  };
  var handleMouseUp = function handleMouseUp(e) {
    var _field$push;
    if (!leftButtonDown) return;
    e.preventDefault();
    e.stopPropagation();
    setHotAreaItem(void 0);
    setLeftButtonDown(false);
    if (
      ((hotAreaItem === null || hotAreaItem === void 0 ? void 0 : hotAreaItem.width) || 0) <
        LIMIT_SIZE &&
      ((hotAreaItem === null || hotAreaItem === void 0 ? void 0 : hotAreaItem.height) || 0) <
        LIMIT_SIZE
    ) {
      message.error('\u70ED\u533A\u4E0D\u80FD\u5C0F\u4E8E '.concat(LIMIT_SIZE, ' \u50CF\u7D20'));
      return;
    }
    hotAreaItem &&
      (field === null || field === void 0
        ? void 0
        : (_field$push = field.push) === null || _field$push === void 0
        ? void 0
        : _field$push.call(field, cloneDeep(hotAreaItem)));
  };
  useEffect(
    function () {
      setHotAreaItem(void 0);
      field === null || field === void 0 ? void 0 : field.reset();
    },
    [
      (_parentForm$values = parentForm.values) === null || _parentForm$values === void 0
        ? void 0
        : (_parentForm$values$ba = _parentForm$values.basicAttribute) === null ||
          _parentForm$values$ba === void 0
        ? void 0
        : _parentForm$values$ba.image,
    ],
  );
  if (
    !((_parentForm$values2 = parentForm.values) === null || _parentForm$values2 === void 0
      ? void 0
      : (_parentForm$values2$b = _parentForm$values2.basicAttribute) === null ||
        _parentForm$values2$b === void 0
      ? void 0
      : _parentForm$values2$b.image)
  )
    return null;
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      DragContainer,
      null,
      /*#__PURE__*/ React.createElement(Image, {
        src:
          (_parentForm$values3 = parentForm.values) === null || _parentForm$values3 === void 0
            ? void 0
            : (_parentForm$values3$b = _parentForm$values3.basicAttribute) === null ||
              _parentForm$values3$b === void 0
            ? void 0
            : _parentForm$values3$b.image,
        preview: false,
        style: {
          width: '100%',
        },
        alt: '',
      }),
      /*#__PURE__*/ React.createElement(
        DragArea,
        {
          ref: containerRef,
          onMouseDown: handleMouseDown,
          onMouseUp: handleMouseUp,
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseUp,
        },
        dataSource.map(function (_ref2, index) {
          var link = _ref2.link,
            style = _objectWithoutProperties(_ref2, _excluded);
          return /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'area-container-item',
              style: style,
              key: index,
            },
            index + 1,
          );
        }),
        hotAreaItem &&
          /*#__PURE__*/ React.createElement('div', {
            className: 'area-container-item dashed',
            style: hotAreaItem,
          }),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      FormArea,
      null,
      dataSource.map(function (item, index) {
        var items = Array.isArray(schema.items)
          ? schema.items[index] || schema.items[0]
          : schema.items;
        return /*#__PURE__*/ React.createElement(
          Row,
          {
            key: index,
          },
          /*#__PURE__*/ React.createElement(
            Col,
            {
              span: 5,
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: 'label',
              },
              index + 1,
              '. \u8DF3\u8F6C\u94FE\u63A5:',
            ),
          ),
          /*#__PURE__*/ React.createElement(
            Col,
            {
              span: 17,
            },
            /*#__PURE__*/ React.createElement(RecursionField, {
              schema: items,
              name: index,
            }),
          ),
          /*#__PURE__*/ React.createElement(
            Col,
            {
              span: 2,
            },
            /*#__PURE__*/ React.createElement(Button, {
              icon: /*#__PURE__*/ React.createElement(DeleteOutlined, null),
              onClick: function onClick() {
                return field.remove(index);
              },
              style: {
                marginLeft: 4,
              },
            }),
          ),
        );
      }),
    ),
  );
});
HotArea.displayName = 'HotArea';
export default HotArea;
