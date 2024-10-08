var _excluded = [
  'selectedList',
  'isDragging',
  'activeIndex',
  'refresh',
  'isPreviewing',
  'initialWidgets',
  'appCode',
  'isOnLoad',
  'loading',
];
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
import React, { useContext, useEffect, useRef } from 'react';
import IframeResizer from '@kp-react-visual-design/iframe-resizer-react';
import VisualDesignContext from '../context';
import { iframeURL } from '../../consts';
import { Wrapper } from './index.styled';
import { useDeepEffect } from '../../custom-hooks';
var ComponentTreeWidget = function ComponentTreeWidget() {
  var _useContext = useContext(VisualDesignContext),
    selectedList = _useContext.selectedList,
    isDragging = _useContext.isDragging,
    activeIndex = _useContext.activeIndex,
    refresh = _useContext.refresh,
    isPreviewing = _useContext.isPreviewing,
    initialWidgets = _useContext.initialWidgets,
    appCode = _useContext.appCode,
    isOnLoad = _useContext.isOnLoad,
    loading = _useContext.loading,
    rest = _objectWithoutProperties(_useContext, _excluded);
  var iframeRef = useRef(null);
  var onMessage = function onMessage(dataMessage) {
    var _rest$dataMessage$mes;
    (_rest$dataMessage$mes = rest[dataMessage.message.method]) === null ||
    _rest$dataMessage$mes === void 0
      ? void 0
      : _rest$dataMessage$mes.call(rest, dataMessage.message.data);
  };
  useDeepEffect(
    function () {
      var _iframeRef$current;
      if (!isOnLoad) return;
      var postMessageData = {
        selectedList: selectedList,
        isDragging: isDragging,
        activeIndex: activeIndex,
        isPreviewing: isPreviewing,
        initialWidgets: initialWidgets,
        appCode: appCode,
      };
      iframeRef === null || iframeRef === void 0
        ? void 0
        : (_iframeRef$current = iframeRef.current) === null || _iframeRef$current === void 0
        ? void 0
        : _iframeRef$current.sendMessage(postMessageData);
    },
    [selectedList, isDragging, activeIndex, isPreviewing, initialWidgets, appCode, isOnLoad],
  );
  useEffect(function () {
    var iframeDOM = document.querySelector('iframe');
    iframeDOM === null || iframeDOM === void 0
      ? void 0
      : iframeDOM.addEventListener(
          'load',
          function () {
            return rest.onChangeState({
              isOnLoad: true,
            });
          },
          false,
        );
    return function () {
      iframeDOM === null || iframeDOM === void 0
        ? void 0
        : iframeDOM.removeEventListener('load', function () {
            return rest.onChangeState({
              isOnLoad: false,
            });
          });
    };
  }, []);
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    null,
    /*#__PURE__*/ React.createElement(IframeResizer, {
      forwardRef: iframeRef,
      heightCalculationMethod: 'bodyScroll',
      checkOrigin: false,
      src: iframeURL,
      width: 375,
      frameBorder: '0',
      minHeight: 667,
      onMessage: onMessage,
    }),
  );
};
export default ComponentTreeWidget;
