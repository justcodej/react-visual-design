var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import styled from 'styled-components';
export var Wrapper = styled.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  height: 100vh;\n  background-color: #ecebeb;\n  .basis-layout-view {\n    display: flex;\n    justify-content: space-between;\n    height: calc(100vh - 54px);\n    overflow-x: hidden;\n  }\n',
    ])),
);
export var Header = styled.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      '\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 54px;\n  padding: 0 10px;\n  font-size: 20px;\n  background-color: #fff;\n  border-bottom: 1px solid #d9d9d9;\n',
    ])),
);
