var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import styled from 'styled-components';
export var Wrapper = styled.div(
  _templateObject || (_templateObject = _taggedTemplateLiteral(['\n  flex: 1;\n'])),
);
export var Container = styled.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(100% - 40px);\n',
    ])),
);
export var ControlsBarStyled = styled.div(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteral([
      '\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 5px 10px 10px 10px;\n  background-color: #ecebeb;\n  border-bottom: #d9d9d9;\n',
    ])),
);
