var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import styled from 'styled-components';
import { Collapse } from 'antd';
export var Wrapper = styled.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  width: 301px;\n  overflow-y: auto;\n  background-color: #fff;\n  border-right: 1px solid #d9d9d9;\n',
    ])),
);
export var WidgetItemStyled = styled.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  box-shadow: none;\n  cursor: grab;\n  transition: all 0.2s ease;\n  width: 100px;\n  height: 88px;\n  border-right: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n  .icon {\n    width: 32px;\n    height: 32px;\n    margin-bottom: 5px;\n    -webkit-user-drag: none;\n  }\n  &:hover {\n    color: dodgerblue;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  }\n',
    ])),
);
export var CollapseStyled = styled(Collapse)(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteral([
      '\n  border: none;\n  .ant-collapse-content > .ant-collapse-content-box {\n    padding: 0;\n  }\n',
    ])),
);
export var PanelStyled = styled(Collapse.Panel)(
  _templateObject4 ||
    (_templateObject4 = _taggedTemplateLiteral([
      '\n  > .ant-collapse-header {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n',
    ])),
);
