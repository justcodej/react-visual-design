import React, { useContext, useMemo } from 'react';
import { Empty } from 'antd';
import VisualDesignContext from '../context';
import { Drag } from '../../components';
import { Wrapper, WidgetItemStyled, CollapseStyled, PanelStyled } from './index.styled';
var CompositePanel = function CompositePanel() {
  var _useContext = useContext(VisualDesignContext),
    onChangeState = _useContext.onChangeState,
    initialWidgets = _useContext.initialWidgets,
    isOnLoad = _useContext.isOnLoad,
    loading = _useContext.loading;
  var businessWidgets = useMemo(
    function () {
      return initialWidgets.filter(function (item) {
        return item.type === 'business';
      });
    },
    [initialWidgets.length],
  );
  var sceneWidgets = useMemo(
    function () {
      return initialWidgets.filter(function (item) {
        return item.type === 'scene';
      });
    },
    [initialWidgets.length],
  );
  var functionsWidgets = useMemo(
    function () {
      return initialWidgets.filter(function (item) {
        return item.type === 'functions';
      });
    },
    [initialWidgets.length],
  );
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    null,
    /*#__PURE__*/ React.createElement(
      CollapseStyled,
      {
        defaultActiveKey: ['1', '2', '3'],
      },
      /*#__PURE__*/ React.createElement(
        PanelStyled,
        {
          header: '\u4E1A\u52A1\u7C7B',
          key: '1',
        },
        !!businessWidgets.length
          ? /*#__PURE__*/ React.createElement(Drag, {
              initialList: businessWidgets,
              render: function render(_ref) {
                var item = _ref.item;
                return item.visible
                  ? /*#__PURE__*/ React.createElement(
                      WidgetItemStyled,
                      null,
                      /*#__PURE__*/ React.createElement('img', {
                        className: 'icon',
                        src: item.icon,
                        alt: '',
                      }),
                      /*#__PURE__*/ React.createElement(
                        'div',
                        {
                          className: 'name',
                        },
                        item.name,
                      ),
                    )
                  : null;
              },
              onDragStart: function onDragStart() {
                return (
                  isOnLoad &&
                  !loading &&
                  onChangeState({
                    isDragging: true,
                  })
                );
              },
              onDragEnd: function onDragEnd() {
                return (
                  isOnLoad &&
                  !loading &&
                  onChangeState({
                    isDragging: false,
                  })
                );
              },
            })
          : /*#__PURE__*/ React.createElement(Empty, {
              description: '\u6682\u65E0\u6570\u636E',
            }),
      ),
      /*#__PURE__*/ React.createElement(
        PanelStyled,
        {
          header: '\u573A\u666F\u7C7B',
          key: '2',
        },
        !!sceneWidgets.length
          ? /*#__PURE__*/ React.createElement(Drag, {
              initialList: sceneWidgets,
              render: function render(_ref2) {
                var item = _ref2.item;
                return /*#__PURE__*/ React.createElement(
                  WidgetItemStyled,
                  null,
                  /*#__PURE__*/ React.createElement('img', {
                    className: 'icon',
                    src: item.icon,
                    alt: '',
                  }),
                  /*#__PURE__*/ React.createElement(
                    'div',
                    {
                      className: 'name',
                    },
                    item.name,
                  ),
                );
              },
              onDragStart: function onDragStart() {
                return (
                  isOnLoad &&
                  !loading &&
                  onChangeState({
                    isDragging: true,
                  })
                );
              },
              onDragEnd: function onDragEnd() {
                return (
                  isOnLoad &&
                  !loading &&
                  onChangeState({
                    isDragging: false,
                  })
                );
              },
            })
          : /*#__PURE__*/ React.createElement(Empty, {
              description: '\u6682\u65E0\u6570\u636E',
            }),
      ),
      /*#__PURE__*/ React.createElement(
        PanelStyled,
        {
          header: '\u529F\u80FD\u7C7B',
          key: '3',
        },
        !!functionsWidgets.length
          ? /*#__PURE__*/ React.createElement(Drag, {
              initialList: functionsWidgets,
              render: function render(_ref3) {
                var item = _ref3.item;
                return /*#__PURE__*/ React.createElement(
                  WidgetItemStyled,
                  null,
                  /*#__PURE__*/ React.createElement('img', {
                    className: 'icon',
                    src: item.icon,
                    alt: '',
                  }),
                  /*#__PURE__*/ React.createElement(
                    'div',
                    {
                      className: 'name',
                    },
                    item.name,
                  ),
                );
              },
              onDragStart: function onDragStart() {
                return (
                  isOnLoad &&
                  !loading &&
                  onChangeState({
                    isDragging: true,
                  })
                );
              },
              onDragEnd: function onDragEnd() {
                return (
                  isOnLoad &&
                  !loading &&
                  onChangeState({
                    isDragging: false,
                  })
                );
              },
            })
          : /*#__PURE__*/ React.createElement(Empty, {
              description: '\u6682\u65E0\u6570\u636E',
            }),
      ),
    ),
  );
};
export default CompositePanel;
