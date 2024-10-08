var _excluded = ['children'];
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
import React, { createContext, useContext } from 'react';
import { attachPropertiesToComponent } from '@kp-react-visual-design/utils';
import { useField, useFieldSchema } from '@formily/react';
import { DeleteOutlined } from '@ant-design/icons';
var ArrayBaseContext = /*#__PURE__*/ createContext(null);
var ItemContext = /*#__PURE__*/ createContext(null);
var ArrayBase = function ArrayBase(_ref) {
  var children = _ref.children;
  var field = useField();
  var schema = useFieldSchema();
  return /*#__PURE__*/ React.createElement(
    ArrayBaseContext.Provider,
    {
      value: {
        field: field,
        schema: schema,
      },
    },
    children,
  );
};
var Item = function Item(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/ React.createElement(
    ItemContext.Provider,
    {
      value: props,
    },
    children,
  );
};
var Remove = function Remove() {
  var self = useField();
  var array = useContext(ArrayBaseContext);
  var item = useContext(ItemContext);
  return /*#__PURE__*/ React.createElement(DeleteOutlined, {
    onClick: function onClick(e) {
      var _array$field, _array$field$remove;
      if (self === null || self === void 0 ? void 0 : self.disabled) return;
      e.stopPropagation();
      array === null || array === void 0
        ? void 0
        : (_array$field = array.field) === null || _array$field === void 0
        ? void 0
        : (_array$field$remove = _array$field.remove) === null || _array$field$remove === void 0
        ? void 0
        : _array$field$remove.call(_array$field, item.index);
    },
  });
};
var Index = function Index() {
  return /*#__PURE__*/ React.createElement('span', null);
};
var mixin = function mixin(target) {
  target.Index = Index;
  target.Remove = Remove;
  return target;
};
export default attachPropertiesToComponent(ArrayBase, {
  Item: Item,
  mixin: mixin,
});
