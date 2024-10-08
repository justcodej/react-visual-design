import React, { useContext, useMemo } from 'react';
import { Button, message, Popover, Tooltip } from 'antd';
import {
  EyeOutlined,
  // MobileOutlined,
  // DesktopOutlined,
  // ExpandOutlined,
  // SyncOutlined,
  QrcodeOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';
import { QRCodeSVG } from 'qrcode.react';
import VisualDesignContext from '../context';
import { Wrapper, Container, ControlsBarStyled } from './index.styled';
var environment =
  process.env.NODE_ENV === 'development' || location.host.includes('test') ? 'dev-' : '';
var ViewportPanel = function ViewportPanel(_ref) {
  var children = _ref.children;
  var _useContext = useContext(VisualDesignContext),
    onChangeState = _useContext.onChangeState,
    isPreviewing = _useContext.isPreviewing,
    record = _useContext.record,
    appCode = _useContext.appCode,
    selectedList = _useContext.selectedList;
  // const handleRefresh = _.debounce(() => onChangeState({ refresh: new Date().getTime() }), 200);
  var city = useMemo(
    function () {
      var _HeaderConfig$data, _HeaderConfig$data$da, _HeaderConfig$data$da2;
      var HeaderConfig = selectedList.find(function (item) {
        return item.name === 'Header';
      });
      return encodeURIComponent(
        (HeaderConfig === null || HeaderConfig === void 0
          ? void 0
          : (_HeaderConfig$data = HeaderConfig.data) === null || _HeaderConfig$data === void 0
          ? void 0
          : (_HeaderConfig$data$da = _HeaderConfig$data.dataSource.city) === null ||
            _HeaderConfig$data$da === void 0
          ? void 0
          : (_HeaderConfig$data$da2 = _HeaderConfig$data$da[0]) === null ||
            _HeaderConfig$data$da2 === void 0
          ? void 0
          : _HeaderConfig$data$da2[1]) || '',
      );
    },
    [JSON.stringify(selectedList)],
  );
  var link = useMemo(
    function () {
      var polymerizeCode = record.polymerizeCode,
        parentPolymerizeCode = record.parentPolymerizeCode,
        polymerizeType = record.polymerizeType;
      var channelID = polymerizeType === 1 ? polymerizeCode : parentPolymerizeCode;
      return 'https://'
        .concat(environment)
        .concat(appCode, '.otosaas.com/template/')
        .concat(channelID);
    },
    [JSON.stringify(record)],
  );
  var handleClickPreview = function handleClickPreview() {
    onChangeState({
      isPreviewing: !isPreviewing,
    });
    if (!isPreviewing) {
      message.info('建议使用手机扫码预览');
    }
  };
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    null,
    /*#__PURE__*/ React.createElement(
      ControlsBarStyled,
      null,
      /*#__PURE__*/ React.createElement(
        'div',
        null,
        /*#__PURE__*/ React.createElement(
          Button.Group,
          {
            size: 'small',
          },
          /*#__PURE__*/ React.createElement(
            Popover,
            {
              content: /*#__PURE__*/ React.createElement(QRCodeSVG, {
                value: ''.concat(link, '?city=').concat(city, '&preview=1'),
              }),
              placement: 'leftTop',
            },
            /*#__PURE__*/ React.createElement(
              Tooltip,
              {
                title: '\u626B\u7801\u9884\u89C8',
              },
              /*#__PURE__*/ React.createElement(Button, {
                size: 'small',
                icon: /*#__PURE__*/ React.createElement(QrcodeOutlined, null),
              }),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            Tooltip,
            {
              title: '\u5728\u7EBF\u9884\u89C8',
            },
            /*#__PURE__*/ React.createElement(Button, {
              size: 'small',
              onClick: handleClickPreview,
              icon: isPreviewing
                ? /*#__PURE__*/ React.createElement(FormatPainterOutlined, null)
                : /*#__PURE__*/ React.createElement(EyeOutlined, null),
            }),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(Container, null, children),
  );
};
export default ViewportPanel;
