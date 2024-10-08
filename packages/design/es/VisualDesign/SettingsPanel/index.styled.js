var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import styled, { createGlobalStyle } from 'styled-components';
import { FormLayout } from '@formily/antd';
export var Wrapper = styled.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  width: 500px;\n  overflow-y: auto;\n  background-color: #fff;\n  border-left: 1px solid #d9d9d9;\n',
    ])),
);
export var Header = styled.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      '\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px;\n  font-size: 16px;\n  line-height: 30px;\n  background-color: #fff;\n  border-bottom: 1px solid #f0f0f0;\n  .anticon {\n    cursor: pointer;\n  }\n  .anticon:hover {\n    color: #333;\n  }\n',
    ])),
);
export var SettingsGlobalStyled = createGlobalStyle(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteral(['\n  .mb-10 {\n    margin-bottom: 10px;\n  }\n'])),
);
export var FormLayoutStyled = styled(FormLayout)(
  _templateObject4 || (_templateObject4 = _taggedTemplateLiteral(['\n  padding: 5px;\n'])),
);
