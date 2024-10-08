var _templateObject;
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
      '\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%;\n  padding: 20px 0;\n',
    ])),
);
