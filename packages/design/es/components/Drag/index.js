import React from 'react';
import { Conatainer } from './index.styled';
var Drag = function Drag(_ref) {
  var initialList = _ref.initialList,
    render = _ref.render,
    onDragStart = _ref.onDragStart,
    onDragEnd = _ref.onDragEnd;
  var handleDragStart = function handleDragStart(widgetName, e) {
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('widgetName', widgetName);
    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(e);
  };
  var handleDragEnd = function handleDragEnd(e) {
    e.dataTransfer.effectAllowed = 'none';
    e.dataTransfer.clearData();
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(e);
  };
  return /*#__PURE__*/ React.createElement(
    Conatainer,
    null,
    initialList.map(function (item, index) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'drag-box',
          draggable: true,
          key: index,
          onDragStart: function onDragStart(e) {
            return handleDragStart(item.en, e);
          },
          onDragEnd: function onDragEnd(e) {
            return handleDragEnd(e);
          },
        },
        render({
          item: item,
          index: index,
        }),
      );
    }),
  );
};
export default Drag;
